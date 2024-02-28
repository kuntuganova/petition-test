import { Module } from '@nestjs/common';
import { PetitionService } from './petition.service';
import { PetitionController } from './petition.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Petition, PetitionSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Petition.name, schema: PetitionSchema },
    ]),
  ],
  providers: [PetitionService],
  controllers: [PetitionController],
})
export class PetitionModule {}
