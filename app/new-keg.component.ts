import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h2>New Keg</h2>
      <div>
        <label>Enter Keg Name:</label>
        <input class="form-control" #newName>
      </div>
      <div>
        <label>Enter Brand:</label>
        <input  class="form-control" #newBrand>
      </div>
      <div>
        <label>Enter Type:</label>
        <input  class="form-control" #newType placeholder="IPA, Stout, Amber...">
      </div>
      <div>
        <label>Enter Price:</label>
        <input  class="form-control" type="number" #newPrice>
      </div>
      <div>
        <label>Enter Alcohol Content:</label>
        <input placeholder="%" class="form-control" type="number" #newAlcohol>
      </div>
      <br>
        <button (click)="
        addClicked(newName.value, newBrand.value, newType.value, newPrice.value, newAlcohol.value);
        newName.value = '';
        newBrand.value = '';
        newType.value = '';
        newPrice.value = '';
        newAlcohol.value = '';
      " class="btn btn-primary pull-right">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, type: string, price: number, alcohol: number) {
    var newKegToAdd: Keg = new Keg(name, brand, type, price, alcohol);
    this.newKegSender.emit(newKegToAdd);
  }
}
