import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="row">
      <div class="col-md-4">
        <h3 [style.color]="getStyle(keg)">{{ keg.name }}</h3>
        <h4> {{ keg.brand }} </h4>
      </div>
      <div class="col-md-4">
        <br><br>
        <h4>Type: {{ keg.type }} </h4>
        <h4>Alcohol Percentage: {{ keg.alcohol }}%</h4>
      </div>
      <div class="col-md-4">
        <br><br>
        <h4>Pours left: {{ keg.pints }}</h4>
        <h4>Price: $ {{ keg.price }}.00</h4>
      </div>
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
