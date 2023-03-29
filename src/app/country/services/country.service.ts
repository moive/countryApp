import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountry(contry: string): Observable<any> {
    const url = `${this.apiUrl}/name/${contry}`;
    return this.http.get(url).pipe(catchError((err) => of([])));
  }
}
