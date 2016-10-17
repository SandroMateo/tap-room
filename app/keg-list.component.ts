import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InventoryPipe } from './inventory.pipe';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';


@Component({
  selector: 'keg-list',
  template: `
    <select class="form-group" (change)="onChange($event.target.value)">
      <option value="low">Less than 10 pints</option>
      <option value="normal">10+ pints</option>
      <option value="all" selected="selected">All inventory</option>
    </select>
    <div class="form-group well" *ngFor="let keg of childKegList | inventory:selectedInventory">
      <keg-display
        [keg] = "keg"
      ></keg-display>
      <button (click)="editDone(keg)">Edit</button>
    </div>
  `
})

export class KegListComponent {
  public selectedInventory: string = "all";
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editDone(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  onChange(optionFromMenu) {
    this.selectedInventory = optionFromMenu;
    console.log(this.selectedInventory);
  }
}
