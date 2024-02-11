import { ApiProperty } from '@nestjs/swagger';

export class GetAllApartmentsDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  createdAt: Date;
}
