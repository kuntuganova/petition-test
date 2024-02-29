import { ApiProperty } from '@nestjs/swagger';

export class VotingDto {
  @ApiProperty()
  petitionId: string;
}
