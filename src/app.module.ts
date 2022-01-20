import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './modules/countries/countries.module';
import { RedisCacheModule } from './redis-cache/redis-cache.module';

@Module({
  imports: [ConfigModule.forRoot(), CountriesModule, RedisCacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
