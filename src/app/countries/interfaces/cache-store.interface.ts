import { Country } from './country.interface';
import { Region } from './region.types';

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  term: Region;
  countries: Country[];
}
