import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';


@Component({
  selector: 'keg-filter-display',
  template: `
    <select class="form-control" (change)="typeChange($event.target.value)">
        <option *ngFor="let type of childTypeList" [value]="type">{{type}}</option>
        <option value="all" selected="selected">All types</option>
    </select>

    <div class="form-group" (change)="inventoryChange($event.target.value)">
      <div class="radio">
      <label><input type="radio" name="inventory" value="low">Less than 10 pints</label>
      </div>
      <div class="radio">
      <label><input type="radio" name="inventory" value="normal">10+ pints</label>
      </div>
      <div class="radio">
      <label><input type="radio" name="inventory" value="all" checked>All beer amounts</label>
      </div>
    </div>
  `
})

export class KegFilterDisplayComponent {
  @Input() childTypeList: string[];
  @Output() inventorySender = new EventEmitter();
  @Output() typeSender = new EventEmitter();

  inventoryChange(inventoryFromMenu: string) {
    var inventoryFilter: string = inventoryFromMenu;
    this.inventorySender.emit(inventoryFilter)
    console.log(inventoryFilter);
  }

  typeChange(typeFromMenu: string) {
    var typeFilter: string = typeFromMenu;
    this.typeSender.emit(typeFilter);
  }
}
