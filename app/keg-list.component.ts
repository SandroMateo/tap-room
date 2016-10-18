import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InventoryPipe } from './inventory.pipe';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { KegFilterDisplayComponent } from './keg-filter-display.component';


@Component({
  selector: 'keg-list',
  template: `
    <div class="form-group well listedBeers" *ngFor="let keg of childKegList | inventory:childSelectedInventory:childSelectedType">
      <keg-display
        [keg] = "keg"
      ></keg-display>
      <button class="btn btn-danger" (click)="editDone(keg)">✏️ Edit</button>
      <button class="btn btn-success" (click)="sellPint(keg)">🍺 Sell</button>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Input() childTypeList: string[];
  @Input() childSelectedInventory: string;
  @Input() childSelectedType: string;
  @Output() clickSender = new EventEmitter();

  editDone(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPint(kegToSell: Keg) {
    kegToSell.pints--;
  }

}
