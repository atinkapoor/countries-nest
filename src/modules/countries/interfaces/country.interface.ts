export class ICountry {
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

export interface IName {
  common: string;
  official: string;
  nativeName: INativeName;
}

export interface IIdd {
  root: string;
  suffixes: string[];
}

export interface IMaps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface ICar {
  signs: string[];
  side: string;
}

export interface IFlags {
  png: string;
  svg: string;
}

export interface ICoatOfArms {
  png: string;
  svg: string;
}

export interface ICapitalInfo {
  latlng: number[];
}

export interface IPostalCode {
  format: string;
  regex: string;
}

export interface ICurrencies {}
export interface ILanguages {}
export interface ITranslations {}
export interface INativeName {}
