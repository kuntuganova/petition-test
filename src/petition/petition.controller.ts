import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PetitionService } from './petition.service';
import { Petition } from './schema';
import { CreatePetitionDto, EditPetitionDto } from './dto';
import { PetitionPaginationDto } from './dto/petition-pagination.dto';

@Controller('petition')
@ApiTags('petitions')
export class PetitionController {
  constructor(private readonly petitionService: PetitionService) {}

  @Get()
  async getAll(
    @Query() { page, limit, sortBy, sortOrder, name }: PetitionPaginationDto,
  ): Promise<Petition[]> {
    return await this.petitionService.getAll(
      page,
      limit,
      sortBy,
      sortOrder,
      name,
    );
  }

  @Post()
  async create(@Body() petition: CreatePetitionDto): Promise<Petition> {
    return await this.petitionService.create(petition);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Petition> {
    return await this.petitionService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() editPetitionDto: EditPetitionDto,
  ): Promise<Petition> {
    return await this.petitionService.update(id, editPetitionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Petition> {
    return await this.petitionService.delete(id);
  }
}
