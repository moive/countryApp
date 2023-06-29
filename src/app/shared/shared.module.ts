import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [SidebarComponent, SearchBoxComponent],
})
export class SharedModule {}
