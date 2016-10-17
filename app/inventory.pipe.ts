import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "inventory",
  pure: true
})
export class InventoryPipe implements PipeTransform {
  transform(input: Keg[], info) {
    var desiredInventory = info;
    var output: Keg[] = [];
    if(desiredInventory === "low") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].pints < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInventory === "normal") {
      for(var i=0; i < input.length; i++) {
        if(input[i].pints >= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
