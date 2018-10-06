import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Demo2Component } from './demo2/demo2.component';
import { DemoDataBindingComponent } from './demo-data-binding/demo-data-binding.component';
import { FormDemostrationComponent } from './form-demostration/form-demostration.component';
import { TourRegistionComponent } from './tour-registion/tour-registion.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo2Component,
    DemoDataBindingComponent,
    FormDemostrationComponent,
    TourRegistionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [TourRegistionComponent]
})
export class AppModule { }
