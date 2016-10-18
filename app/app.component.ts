import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list
      [childKegList]="allKegs"
      [childTypeList]="allTypes"
      (clickSender)="showDetails($event)"
    ></keg-list>
    <hr>
    <new-keg
      (newKegSender)="addKeg($event)"
    ></new-keg>
    <keg-edit
      [childSelectedKeg] = "selectedKeg"
      (doneClickedSender)="finishedEditing()"
    ></keg-edit>
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
}
