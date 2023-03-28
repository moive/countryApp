import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';

const components = [
  ByCapitalComponent,
  ByCountryComponent,
  ByRegionComponent,
  ShowCountryComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, FormsModule],
  exports: [components],
})
export class CountryModule {}
