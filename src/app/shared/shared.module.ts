import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent],
})
export class SharedModule {}
