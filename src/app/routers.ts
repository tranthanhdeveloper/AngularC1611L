import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
export const routes:Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'find', redirectTo: 'search'},
	{path: 'home', component: HomeComponent},
	{path: 'products', component: ProductListComponent},
	{path: 'products/productdetail/:id', component: ProductDetailComponent} 
];
