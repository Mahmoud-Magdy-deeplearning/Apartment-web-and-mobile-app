import { Module } from '@nestjs/common';
import { ApartmentsModule } from './apartments/apartments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomConfigModule } from './config/config.module';
import { databaseConfig } from './config/database.config';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ApartmentsModule,
    CustomConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [CustomConfigModule],
      useFactory: databaseConfig,
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
