import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { HttpModule } from '@nestjs/axios';
import { RedisCacheModule } from 'src/redis-cache/redis-cache.module';

@Module({
  imports: [HttpModule, RedisCacheModule],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
