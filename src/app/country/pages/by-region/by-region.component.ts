import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  regions: string[] = ['americas', 'asia', 'europe', 'africa', 'oceania'];
  activeRegion: string = '';

  constructor() {}

  getClassCSS(region: string) {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    this.activeRegion = region;

    // TODO: call for services
  }
}
