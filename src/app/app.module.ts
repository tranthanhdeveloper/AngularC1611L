import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Demo2Component } from './demo2/demo2.component';
import { DemoDataBindingComponent } from './demo-data-binding/demo-data-binding.component';
import { FormDemostrationComponent } from './form-demostration/form-demostration.component';
import { TourRegistionComponent } from './tour-registion/tour-registion.component';
import { SeviceDemoComponent } from './sevice-demo/sevice-demo.component';
import {Service1, Service2} from './services/service';
import { ProductService } from './services/product.service';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Demo2Component,
    DemoDataBindingComponent,
    FormDemostrationComponent,
    TourRegistionComponent,
    SeviceDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Service1, Service2, ProductService],
  bootstrap: [SeviceDemoComponent]
})
export class AppModule { }
