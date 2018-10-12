import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { Demo2Component } from './demo2/demo2.component';
import { DemoDataBindingComponent } from './demo-data-binding/demo-data-binding.component';
import { FormDemostrationComponent } from './form-demostration/form-demostration.component';
import { TourRegistionComponent } from './tour-registion/tour-registion.component';
import { SeviceDemoComponent } from './sevice-demo/sevice-demo.component';
import {Service1, Service2} from './services/service';
import { ProductService } from './services/product.service';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { routes } from './routers';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    Demo2Component,
    DemoDataBindingComponent,
    FormDemostrationComponent,
    TourRegistionComponent,
    SeviceDemoComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductListComponent,
    HomeComponent,
    ContactComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Service1, Service2, ProductService, {provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
