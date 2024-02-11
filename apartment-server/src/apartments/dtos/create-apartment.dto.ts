// create-apartment.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { apartmentEnum, furnitureEnum, sellingEnum } from '../apartment.enum';

export class CreateApartmentDto {
  @ApiProperty({ example: 'Giza medical tower' })
  title: string;

  @ApiProperty({ example: 950000 })
  price: number;

  @ApiProperty({ example: '87 Mohy abo el ez ST, Giza District, Egypt' })
  location: string;

  @ApiProperty({ example: 90 })
  space: number;

  @ApiProperty({ example: furnitureEnum.UNFURNISHED })
  furnitureType: furnitureEnum;

  @ApiProperty({ example: sellingEnum.SELL })
  sellingType: sellingEnum;

  @ApiProperty({ example: apartmentEnum.APARTMENT })
  apartmentType: apartmentEnum;

  @ApiProperty({ example: 2 })
  roomCount: number;

  @ApiProperty({ example: 1 })
  bathCount: number;

  @ApiProperty({
    example:
      'good apartment in a very popular place near from alot of services',
  })
  description: string;

  @ApiProperty({
    example:
      'https://mapartments.co.uk/uploads/transforms/b235c4646ab36ef9ae959de20fa459fc/11257/401_topRenders_b_7abbbb2796f27c91ef535646dc2c5299.webp',
  })
  imageUrl: string;

  @ApiProperty()
  createdAt: Date;
}
