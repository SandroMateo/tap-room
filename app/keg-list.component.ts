import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InventoryPipe } from './inventory.pipe';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';


@Component({
  selector: 'keg-list',
  template: `
    <select class="form-group" (change)="inventoryChange($event.target.value)">
      <option value="low">Less than 10 pints</option>
      <option value="normal">10+ pints</option>
      <option value="all" selected="selected">All inventory</option>
    </select>
    <div class="form-group" (change)="typeChange($event.target.value)">
      <div *ngFor="let type of childTypeList">
        <div class="radio">
          <label>
            <input type="radio" name="type" [value]="type">
            {{type}}
          </label>
        </div>
      </div>
      <label>
        <input type="radio" name="type" value="all" checked>
        All
      </label>
    </div>
    <div class="form-group well" *ngFor="let keg of childKegList | inventory:selectedInventory:selectedType">
      <keg-display
        [keg] = "keg"
      ></keg-display>
      <button class="btn btn-danger" (click)="editDone(keg)"><span class="glyphicon glyphicon-pencil"></span></button>
      <button class="btn btn-success" (click)="sellPint(keg)"><span class="glyphicon glyphicon-pencil"></span></button>
    </div>
  `
})

export class KegListComponent {
  public selectedInventory: string = "all";
  public selectedType: string = "all";
  @Input() childKegList: Keg[];
  @Input() childTypeList: string[];
  @Output() clickSender = new EventEmitter();

  editDone(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPint(kegToSell: Keg) {
    kegToSell.pints--;
  }

  inventoryChange(inventoryFromMenu) {
    this.selectedInventory = inventoryFromMenu;
    console.log(this.selectedInventory);
  }

  typeChange(typeFromMenu) {
    this.selectedType = typeFromMenu;
    console.log(this.selectedType);
  }
}
