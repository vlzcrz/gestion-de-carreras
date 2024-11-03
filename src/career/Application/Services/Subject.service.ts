import { Injectable } from '@nestjs/common';
import { SubjectRepository } from 'src/career/Infrastructure/Repositories/Subject.repository';

@Injectable()
export class SubjectService {
  constructor(private readonly subjectRepository: SubjectRepository) {}

  async GetAll() {
    const subjects = await this.subjectRepository.GetAll();
    const response = {
      Subjects: subjects,
    };
    return response;
  }

  async GetAllRelationship() {
    const subjectRelationships =
      await this.subjectRepository.GetAllRelationship();
    const response = {
      SubjectRelationships: subjectRelationships,
    };
    return response;
  }

  async GetPreRequisitesMap() {
    const subjectPreRequisites =
      await this.subjectRepository.GetPreRequisitesMap();
    const response = {
      SubjectPreRequisites: subjectPreRequisites,
    };
    return response;
  }

  async GetPostRequisitesMap() {
    const subjectPostRequisites =
      await this.subjectRepository.GetPostRequisitesMap();
    const response = {
      SubjectPostRequisites: subjectPostRequisites,
    };
    return response;
  }
}
