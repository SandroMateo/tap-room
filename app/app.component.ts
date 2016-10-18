import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1 class="text-center">Tap Room</h1>
      <div class="row">
        <div class="col-md-6 well jumbo-wells">
          <new-keg
            (newKegSender)="addKeg($event)"
          ></new-keg>
        </div>
        <div class="col-md-6 well jumbo-wells">
          <div>
            <keg-filter-display
              [childTypeList]="allTypes"
              (inventorySender)="selectInventory($event)"
              (typeSender)="selectType($event)"
            ></keg-filter-display>
          </div>
          <hr>
          <div>
            <keg-edit
              [childSelectedKeg] = "selectedKeg"
              (doneClickedSender)="finishedEditing()"
            ></keg-edit>
          </div>
        </div>
      </div>
    </div>
    <keg-list
      [childKegList]="allKegs"
      [childSelectedInventory]="selectedInventory"
      [childSelectedType]="selectedType"
      (clickSender)="showDetails($event)"
    ></keg-list>

  </div>
  `
})

export class AppComponent {
  public allKegs: Keg[] = [
    new Keg("Pliny the Elder", "Russian River Brewing", "IPA", 7, 8),
    new Keg("Mowgli", "Caldera", "Stout", 8, 10),
    new Keg("Pee Water", "Budweiser", "Lager", 2, 2),
    new Keg("Ginja Ninja", "2Towns", "Cider", 4, 6)
  ];

  public allTypes: string[] = ["IPA", "Stout", "Lager", "Cider"];

  selectedKeg: Keg = null;
  selectedInventory: string = "all";
  selectedType: string = "all";

  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.allKegs.push(newKegFromChild);
    if(this.allTypes.indexOf(newKegFromChild.type) === -1) {
      this.allTypes.push(newKegFromChild.type);
    }
    console.log(this.allKegs);
  }

  selectInventory(inventory: string) {
    this.selectedInventory = inventory;
  }

  selectType(type: string) {
    this.selectedType = type;
  }
}
