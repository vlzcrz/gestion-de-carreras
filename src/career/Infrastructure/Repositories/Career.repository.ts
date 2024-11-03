import { InjectModel } from '@nestjs/mongoose';
import { ICareerRepository } from 'src/career/Domain/Repositories/Career.repository.interface';
import { Career } from '../Schemas/Career.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CareerRepository implements ICareerRepository {
  constructor(
    @InjectModel(Career.name)
    private readonly careerRepository: Model<Career>,
  ) {}

  async GetAll() {
    const Careers = await this.careerRepository.find().exec();
    return Careers;
  }
}
