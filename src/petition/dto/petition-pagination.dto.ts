import { ApiPropertyOptional } from '@nestjs/swagger';

export class PetitionPaginationDto {
  @ApiPropertyOptional()
  page: number;

  @ApiPropertyOptional()
  limit: number;

  @ApiPropertyOptional()
  sortBy?: string;

  @ApiPropertyOptional()
  sortOrder?: string;

  @ApiPropertyOptional()
  name?: string;
}
