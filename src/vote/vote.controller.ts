import { Controller, UseGuards, Post, Body, Delete } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { VoteService } from './vote.service';
import { UnvotingDto, VotingDto } from './dto';
import { Vote } from './schema';
import { CurrentUser } from 'src/auth/decorator/current-user.decorator';
import { IUser } from 'src/user/interfaces';

@ApiSecurity('bearer')
@Controller('vote')
@ApiTags('votes')
@UseGuards(JwtAuthGuard)
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  async voting(
    @Body() votingDto: VotingDto,
    @CurrentUser() user: IUser,
  ): Promise<Vote> {
    return await this.voteService.voting(votingDto, user);
  }

  @Delete()
  async unvoting(@Body() unvotingDto: UnvotingDto): Promise<Vote> {
    return this.voteService.unvoting(unvotingDto.petitionId);
  }
}
