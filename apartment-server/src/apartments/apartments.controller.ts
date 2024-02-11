import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import {
  ApiTags,
  ApiResponse,
  ApiCreatedResponse,
  ApiBody,
  ApiParam,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { getApartmentDto } from './dtos/getApartment.dto';
import { CreateApartmentDto } from './dtos/create-apartment.dto';
import { Apartment } from './apartment.entity';
import { GetAllApartmentsDto } from './dtos/getAllApartments.dto';

@ApiTags('apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get all apartments.',
    type: [GetAllApartmentsDto],
  })
  async findAll(): Promise<GetAllApartmentsDto[]> {
    return await this.apartmentsService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Apartment ID' })
  @ApiNotFoundResponse({ description: 'Apartment not found' })
  async findById(@Param('id') id: number): Promise<getApartmentDto> {
    const apartment = await this.apartmentsService.findById(id);
    if (!apartment) {
      throw new NotFoundException('Apartment not found');
    }
    return apartment;
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Apartment has been successfully created.',
    type: Apartment,
  })
  @ApiBody({
    type: CreateApartmentDto,
    description: 'Data for creating a new apartment.',
  })
  async create(
    @Body() createApartmentDto: CreateApartmentDto,
  ): Promise<Apartment> {
    return this.apartmentsService.create(createApartmentDto);
  }
}
