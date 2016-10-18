import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-edit',
  template: `
    <div *ngIf="childSelectedKeg">
      <h2>Edit Keg</h2>
      <div>
        <label>Enter Keg Name:</label>
        <input [(ngModel)]="childSelectedKeg.name">
      </div>
      <div>
        <label>Enter Brand:</label>
        <input [(ngModel)]="childSelectedKeg.brand">
      </div>
      <div>
        <label>Enter Type:</label>
        <input [(ngModel)]="childSelectedKeg.type">
      </div>
      <div>
        <label>Enter Price:</label>
        <input type="number" [(ngModel)]="childSelectedKeg.price">
      </div>
      <div>
        <label>Enter Alcohol Content:
        <input type="number" [(ngModel)]="childSelectedKeg.alcohol">%</label>
        <br><br>
        <button (click)="replenishKeg(childSelectedKeg)" class="btn btn-success pull-right">Replenish</button>
        <button (click)="doneClicked()" class="btn btn-warning pull-right">Done</button>
      </div>
    </div>
  `
})

export class KegEditComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();

  doneClicked() {
    this.doneClickedSender.emit();
  }

  replenishKeg(selectedKeg: Keg) {
    selectedKeg.pints = 24;
  }
}
