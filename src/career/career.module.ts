import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Subject,
  SubjectSchema,
} from './Infrastructure/Schemas/Subject.schema';
import { Career, CareerSchema } from './Infrastructure/Schemas/Career.schema';
import { CareerSeedService } from 'src/Seeders/Services/CareerSeed.service';
import { CareerRepository } from './Infrastructure/Repositories/Career.repository';
import { CareerService } from './Application/Services/Career.service';
import { CareerController } from './Presentation/Career.controller';
import { SubjectSeedService } from 'src/Seeders/Services/SubjectSeed.service';
import { SubjectRepository } from './Infrastructure/Repositories/Subject.repository';
import { SubjectService } from './Application/Services/Subject.service';
import { SubjectController } from './Presentation/Subject.controller';
import {
  SubjectRelationship,
  SubjectRelationshipSchema,
} from './Infrastructure/Schemas/SubjectRelationship.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Subject.name,
        schema: SubjectSchema,
      },
      {
        name: Career.name,
        schema: CareerSchema,
      },
      {
        name: SubjectRelationship.name,
        schema: SubjectRelationshipSchema,
      },
    ]),
  ],
  controllers: [CareerController, SubjectController],
  providers: [
    CareerSeedService,
    CareerRepository,
    CareerService,
    SubjectSeedService,
    SubjectRepository,
    SubjectService,
  ],
})
export class CareerModule implements OnModuleInit {
  constructor(
    private readonly CareerSeedService: CareerSeedService,
    private readonly SubjectSeedService: SubjectSeedService,
  ) {}

  async onModuleInit() {
    await this.CareerSeedService.seed();
    await this.SubjectSeedService.seedSubjects();
    await this.SubjectSeedService.seedSubjectRelationships();
  }
}
