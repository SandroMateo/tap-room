import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list
      [childKegList]="allKegs"
      (clickSender)="showDetails($event)"
    ></keg-list>
    <hr>
    <new-keg
      (newKegSender)="addKeg($event)"
    ></new-keg>
  </div>
  `
})

export class AppComponent {
  public allKegs: Keg[] = [
    new Keg("Pliny the Elder", "Russian River Brewing", 7, 8),
    new Keg("Mowgli", "Caldera", 8, 10),
    new Keg("Pee Water", "Budweiser", 2, 2),
    new Keg("Ginja Ninja", "2Towns", 4, 6)
  ];

  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.allKegs.push(newKegFromChild);
  }
}
