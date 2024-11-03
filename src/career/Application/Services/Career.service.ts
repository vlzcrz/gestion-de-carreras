import { Injectable } from '@nestjs/common';
import { CareerRepository } from 'src/career/Infrastructure/Repositories/Career.repository';

@Injectable()
export class CareerService {
  constructor(private readonly careerRepository: CareerRepository) {}

  async GetAll() {
    const careers = await this.careerRepository.GetAll();
    const response = {
      Careers: careers,
    };
    return response;
  }
}
