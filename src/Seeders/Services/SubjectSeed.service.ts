import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { readFile } from 'fs/promises';
import { Model } from 'mongoose';
import { join } from 'path';
import { Subject } from 'src/career/Infrastructure/Schemas/Subject.schema';
import { SubjectRelationship } from 'src/career/Infrastructure/Schemas/SubjectRelationship.schema';

@Injectable()
export class SubjectSeedService {
  private readonly logger = new Logger(SubjectSeedService.name);

  constructor(
    @InjectModel(Subject.name)
    private subjectModel: Model<Subject>,

    @InjectModel(SubjectRelationship.name)
    private subjectRelationshipModel: Model<SubjectRelationship>,
  ) {}

  async seedSubjects() {
    try {
      const filePath = join(__dirname, '../Subject/Subject-seed.json');
      const fileContent = await readFile(filePath, 'utf-8');
      const subjects = JSON.parse(fileContent);

      for (const subjectData of subjects) {
        await this.subjectModel.updateOne(
          {
            Code: subjectData.code,
            Name: subjectData.name,
            Department: subjectData.department,
            Credits: subjectData.credits,
            Semester: subjectData.semester,
          },
          { $setOnInsert: subjectData },
          { upsert: true },
        );
      }

      this.logger.log('Database successfully seeded with subject data');
    } catch (error) {
      this.logger.error('Error seeding subject data', error);
    }
  }

  async seedSubjectRelationships() {
    try {
      const filePath = join(
        __dirname,
        '../Subject/SubjectRelationship-seed.json',
      );
      const fileContent = await readFile(filePath, 'utf-8');
      const relationships = JSON.parse(fileContent);

      for (const relationshipData of relationships) {
        await this.subjectRelationshipModel.updateOne(
          {
            SubjectCode: relationshipData.SubjectCode,
            PreSubjectCode: relationshipData.PreSubjectCode,
          },
          { $setOnInsert: relationshipData },
          { upsert: true },
        );
      }

      this.logger.log(
        'Database successfully seeded with subject relationship data',
      );
    } catch (error) {
      this.logger.error('Error seeding subject relationship data', error);
    }
  }
}
