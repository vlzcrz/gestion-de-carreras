import { Controller } from '@nestjs/common';
import { SubjectService } from '../Application/Services/Subject.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @GrpcMethod('SubjectService', 'GetAll')
  async getAll() {
    return this.subjectService.GetAll();
  }

  @GrpcMethod('SubjectService', 'GetAllRelationships')
  async getAllRelationship() {
    return this.subjectService.GetAllRelationship();
  }

  @GrpcMethod('SubjectService', 'GetPreRequisitesMap')
  async getPreRequisitesMap() {
    return this.subjectService.GetPreRequisitesMap();
  }

  @GrpcMethod('SubjectService', 'GetPostRequisitesMap')
  async getPostRequisitesMap() {
    return this.subjectService.GetPostRequisitesMap();
  }
}
