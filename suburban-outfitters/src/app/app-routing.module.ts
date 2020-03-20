import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ManageSuppliersComponent } from './admin-dashboard/manage-suppliers/manage-suppliers.component'
import { ManageCustomersComponent } from './admin-dashboard/manage-customers/manage-customers.component';
import { ManageProductsComponent } from './admin-dashboard/manage-products/manage-products.component';
import { ManageInventoryComponent } from './admin-dashboard/manage-inventory/manage-inventory.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manage-suppliers', component: ManageSuppliersComponent },
  { path: 'manage-customers', component: ManageCustomersComponent },
  { path: 'manage-products', component: ManageProductsComponent },
  { path: 'manage-inventory', component: ManageInventoryComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: '**', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
