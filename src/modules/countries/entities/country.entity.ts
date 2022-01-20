import {
  ICapitalInfo,
  ICar,
  ICoatOfArms,
  ICountry,
  ICurrencies,
  IFlags,
  IIdd,
  ILanguages,
  IMaps,
  IName,
  IPostalCode,
  ITranslations,
} from '../interfaces/country.interface';

export class Country extends ICountry {
  name: IName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: ICurrencies;
  idd: IIdd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: ILanguages;
  translations: ITranslations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  flag: string;
  maps: IMaps;
  population: number;
  fifa: string;
  car: ICar;
  timezones: string[];
  continents: string[];
  flags: IFlags;
  coatOfArms: ICoatOfArms;
  startOfWeek: string;
  capitalInfo: ICapitalInfo;
  postalCode: IPostalCode;
}
