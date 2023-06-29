import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouteingModule } from './app-routing.module';
import { CountriesModule } from './countries/countries.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouteingModule,
    SharedModule,
    // CountriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
