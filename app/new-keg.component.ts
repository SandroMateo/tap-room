import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter Keg Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Brand:</label>
      <input #newBrand>
    </div>
    <div>
      <label>Enter Price:</label>
      <input type="number" #newPrice>
    </div>
    <div>
      <label>Enter Alcohol Content:
      <input type="number" #newAlcohol>%</label>
      <button (click)="
      addClicked(newName.value, newBrand.value, newPrice.value, newAlcohol.value);
    ">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, alcohol: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcohol);
    this.newKegSender.emit(newKegToAdd);
  }
}
