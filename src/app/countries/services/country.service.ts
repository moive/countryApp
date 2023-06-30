import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2');
  }

  constructor(private http: HttpClient) {}

  searchCountry(contry: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${contry}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByAlpha(id: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
