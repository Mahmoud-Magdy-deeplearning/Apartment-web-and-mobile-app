import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { apartmentEnum, furnitureEnum, sellingEnum } from './apartment.enum';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  @IsNumber()
  price: number;

  @Column()
  @ApiProperty()
  @IsNumber()
  location: string;

  @Column()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Column()
  @ApiProperty()
  @IsNumber()
  space: number;

  @Column({ type: 'enum', enum: furnitureEnum })
  @IsEnum(furnitureEnum)
  furnitureType: furnitureEnum;

  @Column({ type: 'enum', enum: sellingEnum })
  @IsEnum(sellingEnum)
  sellingType: sellingEnum;

  @Column({ type: 'enum', enum: apartmentEnum })
  @IsEnum(apartmentEnum)
  apartmentType: apartmentEnum;

  @Column()
  @ApiProperty()
  @IsNumber()
  roomCount: number;

  @Column()
  @ApiProperty()
  @IsNumber()
  bathCount: number;

  @Column()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Column()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @CreateDateColumn()
  createdAt: Date;
}
