import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.types';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2');
  }

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { term: '', countries: [] },
  };

  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(800)
    );
  }

  getCountryByAlpha(id: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountries = { term: country, countries })
      )
    );
    // return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCapital = { term: capital, countries })
      )
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) => (this.cacheStore.byRegion = { term: region, countries })
      )
    );
  }
}
