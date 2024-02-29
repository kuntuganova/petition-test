import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vote, VoteSchema } from './schema';
import { PetitionModule } from 'src/petition/petition.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }]),
    PetitionModule,
    AuthModule,
  ],
  providers: [VoteService],
  controllers: [VoteController],
})
export class VoteModule {}
