import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <h5 [style.color]="getStyle(keg)">{{ keg.name }}</h5>
    </div>
  `
})

export class KegComponent {
  public keg: Keg;
  getStyle(keg) {
    if(keg.price < 5) {
      return "goldenrod";
    } else {
      return "blue";
    }
  }
}
