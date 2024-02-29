import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Petition } from './schema';
import { CreatePetitionDto } from './dto';
import { EditPetitionDto } from './dto';

@Injectable()
export class PetitionService {
  constructor(
    @InjectModel('Petition')
    private readonly petitionModel: Model<Petition>,
  ) {}

  async getAll(
    page = 1,
    limit = 10,
    sortBy = 'creationDate',
    sortOrder = 'desc',
    name?: string,
  ): Promise<Petition[]> {
    return await this.petitionModel
      .find(name ? { name } : {})
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
      .exec();
  }

  async findById(id: string): Promise<Petition> {
    const petition = await (
      await this.petitionModel.findById(id)
    ).populate('vote');

    if (!petition) {
      throw new NotFoundException('Petition not found');
    }
    return petition;
  }

  async create(petition: CreatePetitionDto): Promise<Petition> {
    const createdPetition = new this.petitionModel(petition);

    return await createdPetition.save();
  }

  async update(
    id: string,
    editPetitionDto: EditPetitionDto,
  ): Promise<Petition> {
    const { name, description, vote } = editPetitionDto;
    const petition = await this.findById(id);

    name ? (petition.name = name) : null;
    description ? (petition.description = description) : null;
    vote ? petition.vote.push(vote._id as any) : null;

    return await petition.save();
  }

  async delete(id: string): Promise<Petition> {
    const deletedPetition = await this.petitionModel.findByIdAndDelete(id);

    if (!deletedPetition) {
      throw new NotFoundException('Petition not found');
    }

    return deletedPetition;
  }
}
