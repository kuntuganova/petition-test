import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { Vote } from './schema';
import { InjectModel } from '@nestjs/mongoose';
import { PetitionService } from 'src/petition/petition.service';
import { VotingDto } from './dto';
import { IUser } from 'src/user/interfaces';

@Injectable()
export class VoteService {
  constructor(
    @InjectModel('Vote')
    private readonly voteModel: Model<Vote>,
    private readonly petitionService: PetitionService,
  ) {}

  async voting(votingDto: VotingDto, user: IUser): Promise<Vote> {
    const { petitionId } = votingDto;

    const petition = await this.petitionService.findById(petitionId);

    const exist = await this.voteModel.findOne({ petition, user });

    if (exist) {
      throw new ConflictException('You have already voted for this petition');
    }

    const vote = new this.voteModel({ petition, user });
    await vote.save();
    await this.petitionService.update(petitionId, { ...petition, vote });
    return vote;
  }

  async unvoting(petitionId: string): Promise<Vote> {
    const petition = await this.petitionService.findById(petitionId);

    const vote = await this.voteModel.findOne({ petition });

    if (!vote) {
      throw new BadRequestException('You have not voted for this petition yet');
    }

    return await this.voteModel.findByIdAndDelete(vote._id);
  }
}
