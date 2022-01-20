import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Observable } from 'rxjs';
import { Country } from 'src/modules/countries/entities/country.entity';

@Injectable()
export class RedisCacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async get(key): Promise<any> {
    return await this.cache.get(key);
  }

  async set(key, value) {
    await this.cache.set(key, value, 1000);
  }

  async reset() {
    await this.cache.reset();
  }

  async del(key) {
    await this.cache.del(key);
  }

  public getCountry(name: string): Observable<Country> {
    return new Observable((subject) => {
      this.cache.get(`${name}_country_name`).then((value) => {
        subject.next(value);
      });
    });
  }
}
