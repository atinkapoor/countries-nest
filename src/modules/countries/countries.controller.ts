import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ICountry } from './interfaces/country.interface';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countriesService.create(createCountryDto);
  }

  @Get()
  findAll(): Observable<ICountry[]> {
    return this.countriesService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return await this.countriesService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countriesService.update(+id, updateCountryDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.countriesService.remove(name);
  }
}
