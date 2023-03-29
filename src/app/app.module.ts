import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CountryModule } from './country/country.module';
import { AppRouteingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouteingModule,
    SharedModule,
    CountryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
