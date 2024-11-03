import { Career } from '../Entities/Career.entity';

export interface ICareerRepository {
  GetAll(): Promise<Career[] | null>;
}
