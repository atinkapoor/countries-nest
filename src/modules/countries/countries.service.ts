import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { RedisCacheService } from 'src/redis-cache/redis-cache.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ICountry } from './interfaces/country.interface';

@Injectable()
export class CountriesService {
  constructor(
    private httpService: HttpService,
    private cacheManager: RedisCacheService,
  ) {}

  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  findAll(): Observable<ICountry[]> {
    return this.httpService
      .get('https://restcountries.com/v3.1/all')
      .pipe(map((response) => response.data));
  }

  async findOne(name: string): Promise<ICountry> {
    var cached = await this.cacheManager.get(`${name}_country_name`);
    if (cached) {
      return cached;
    }

    var response = await (
      await this.httpService
        .get(`https://restcountries.com/v3.1/name/${name}`)
        .toPromise()
    ).data;
    await this.cacheManager.set(`${name}_country_name`, response);
    return response as ICountry;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  async remove(name: string) {
    await this.cacheManager.del(`${name}_country_name`);
  }
}
