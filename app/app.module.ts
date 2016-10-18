import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent }   from './app.component';
import { NewKegComponent } from './new-keg.component';
import { KegListComponent } from './keg-list.component';
import { InventoryPipe } from './inventory.pipe';
import { KegComponent } from './keg.component';
import { KegEditComponent } from './keg-edit.component';
import { KegFilterDisplayComponent } from './keg-filter-display.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    NewKegComponent,
    KegListComponent,
    InventoryPipe,
    KegComponent,
    KegEditComponent,
    KegFilterDisplayComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
