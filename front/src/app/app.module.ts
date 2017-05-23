import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

import {PhonesService} from './phones.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
