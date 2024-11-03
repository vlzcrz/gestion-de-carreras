import { Controller } from '@nestjs/common';
import { CareerService } from '../Application/Services/Career.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @GrpcMethod('CareerService', 'GetAll')
  async getAll() {
    return this.careerService.GetAll();
  }
}
