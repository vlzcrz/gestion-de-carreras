import { Subject } from '../Entities/Subject.entity';
import { SubjectPostRequisites } from '../Entities/SubjectPostRequisites.entity';
import { SubjectPreRequisites } from '../Entities/SubjectPreRequisites.entity';
import { SubjectRelationship } from '../Entities/SubjectRelationship.entiity';

export interface ISubjectRepository {
  GetAll(): Promise<Subject[] | null>;
  GetAllRelationship(): Promise<SubjectRelationship[] | null>;
  GetPreRequisitesMap(): Promise<SubjectPreRequisites[] | null>;
  GetPostRequisitesMap(): Promise<SubjectPostRequisites[] | null>;
}
