import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apartment } from './apartment.entity';
import { CreateApartmentDto } from './dtos/create-apartment.dto';
import { GetAllApartmentsDto } from './dtos/getAllApartments.dto';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {}

  async findAll(): Promise<GetAllApartmentsDto[]> {
    try {
      const allApartments = await this.apartmentRepository.find();
      // Mapping fetched apartments to DTO
      const processedApartments: GetAllApartmentsDto[] = allApartments.map(
        (apartment) => ({
          id: apartment.id,
          title: apartment.title,
          price: apartment.price,
          location: apartment.location,
          description: apartment.description,
          imageUrl: apartment.imageUrl,
          createdAt: apartment.createdAt,
        }),
      );
      return processedApartments;
    } catch (err) {
      throw err;
    }
  }

  async create(createApartmentDto: CreateApartmentDto): Promise<Apartment> {
    try {
      const apartment = this.apartmentRepository.create(createApartmentDto);
      return await this.apartmentRepository.save(apartment);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findById(id: number): Promise<Apartment> {
    const apartment = await this.apartmentRepository.findOneBy({ id });
    if (!apartment) {
      throw new NotFoundException('Apartment not found');
    }
    return apartment;
  }
}
