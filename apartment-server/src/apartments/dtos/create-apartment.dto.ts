// create-apartment.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { apartmentEnum, furnitureEnum, sellingEnum } from '../apartment.enum';

export class CreateApartmentDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  space: number;

  @ApiProperty()
  furnitureType: furnitureEnum;

  @ApiProperty()
  sellingType: sellingEnum;

  @ApiProperty()
  apartmentType: apartmentEnum;

  @ApiProperty()
  roomCount: number;

  @ApiProperty()
  bathCount: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  createdAt: Date;
}
