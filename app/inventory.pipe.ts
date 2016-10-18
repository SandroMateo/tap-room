import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "inventory",
  pure: true
})
export class InventoryPipe implements PipeTransform {
  transform(input: Keg[], desiredInventory, desiredType) {
    var output: Keg[] = [];
    if(desiredInventory === "all" && desiredType === "all"){
      return input;
    } else if(desiredInventory === "low") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].pints < 10 && (input[i].type === desiredType || desiredType === "all")) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInventory === "normal") {
      for(var i=0; i < input.length; i++) {
        if(input[i].pints >= 10 && (input[i].type === desiredType  || desiredType === "all")) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      for(var i=0; i < input.length; i++) {
        if((input[i].type === desiredType  || desiredType === "all")) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
