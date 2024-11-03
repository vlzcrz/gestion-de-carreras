import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { readFile } from 'fs/promises';
import { Model } from 'mongoose';
import { join } from 'path';
import { Career } from 'src/career/Infrastructure/Schemas/Career.schema';

@Injectable()
export class CareerSeedService {
  private readonly logger = new Logger(CareerSeedService.name);

  constructor(
    @InjectModel(Career.name)
    private careerModel: Model<Career>,
  ) {}

  async seed() {
    try {
      const filePath = join(__dirname, '../Career/Career-seed.json');
      const fileContent = await readFile(filePath, 'utf-8');
      const careers = JSON.parse(fileContent);

      for (const careerData of careers) {
        await this.careerModel.updateOne(
          { Name: careerData.Name },
          { $setOnInsert: careerData },
          { upsert: true },
        );
      }

      this.logger.log('Database successfully seeded with career data');
    } catch (error) {
      this.logger.error('Error seeding career data', error);
    }
  }
}
