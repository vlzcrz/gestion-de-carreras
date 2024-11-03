import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISubjectRepository } from 'src/career/Domain/Repositories/Subject.repository.interface';
import { Subject } from '../Schemas/Subject.schema';
import { Model } from 'mongoose';
import { SubjectRelationship } from '../Schemas/SubjectRelationship.schema';
import { SubjectPreRequisites } from 'src/career/Domain/Entities/SubjectPreRequisites.entity';
import { SubjectPreRequisitesMap } from 'src/career/Helpers/SubjectPreRequisitesMap.helper';
import { SubjectPostRequisites } from 'src/career/Domain/Entities/SubjectPostRequisites.entity';
import { SubjectPostRequisitesMap } from 'src/career/Helpers/SubjectPostRequisitesMap.helper';

@Injectable()
export class SubjectRepository implements ISubjectRepository {
  constructor(
    @InjectModel(Subject.name)
    private readonly subjectRepository: Model<Subject>,

    @InjectModel(SubjectRelationship.name)
    private readonly subjectRelationshipRepository: Model<SubjectRelationship>,
  ) {}

  async GetAll() {
    const Subjects = await this.subjectRepository.find().exec();
    return Subjects;
  }
  async GetAllRelationship() {
    const SubjectRelationships = await this.subjectRelationshipRepository
      .find()
      .exec();
    return SubjectRelationships;
  }
  async GetPreRequisitesMap() {
    const SubjectRelationships = await this.subjectRelationshipRepository
      .find()
      .exec();
    let SubjectPreRequisites: SubjectPreRequisites[] =
      SubjectPreRequisitesMap(SubjectRelationships);
    return SubjectPreRequisites;
  }
  async GetPostRequisitesMap() {
    const SubjectRelationships = await this.subjectRelationshipRepository
      .find()
      .exec();
    let SubjectPostRequisites: SubjectPostRequisites[] =
      SubjectPostRequisitesMap(SubjectRelationships);

    return SubjectPostRequisites;
  }
}
