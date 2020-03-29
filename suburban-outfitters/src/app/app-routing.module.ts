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
import { MyOrdersComponent } from './customer-dashboard/my-orders/my-orders.component';
import { OrderDetailComponent } from './customer-dashboard/my-orders/order-detail/order-detail.component';
import { CreateCustomerComponent } from './admin-dashboard/manage-customers/create-customer/create-customer.component';
import { EditCustomerComponent } from './admin-dashboard/manage-customers/edit-customer/edit-customer.component';
import { CreateInventoryItemComponent } from './admin-dashboard/manage-inventory/create-inventory-item/create-inventory-item.component';
import { EditInventoryItemComponent } from './admin-dashboard/manage-inventory/edit-inventory-item/edit-inventory-item.component';
import { CreateProductComponent } from './admin-dashboard/manage-products/create-product/create-product.component';
import { EditProductComponent } from './admin-dashboard/manage-products/edit-product/edit-product.component';
import { CreateSupplierComponent } from './admin-dashboard/manage-suppliers/create-supplier/create-supplier.component';
import { EditSupplierComponent } from './admin-dashboard/manage-suppliers/edit-supplier/edit-supplier.component';

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
  { path: 'admin-dashboard', component: AdminDashboardComponent,
    children: [
      {
        path:  'manage-customers',
        component:  ManageCustomersComponent
      },
      {
        path:  'create-customer',
        component:  CreateCustomerComponent
      },
      {
        path:  'edit-customer/:id',
        component:  EditCustomerComponent
      },
      {
        path:  'manage-inventory',
        component:  ManageInventoryComponent,
      }, 
      {
        path:  'create-inventory-item',
        component:  CreateInventoryItemComponent
      },
      {
        path:  'edit-inventory-item/:id',
        component:  EditInventoryItemComponent
      },      
      {
        path:  'manage-products',
        component:  ManageProductsComponent,
      }, 
      {
        path:  'create-product',
        component:  CreateProductComponent
      },
      {
        path:  'edit-product/:id',
        component:  EditProductComponent
      },
      {
        path:  'manage-suppliers',
        component:  ManageSuppliersComponent,
      },
      {
        path:  'create-supplier',
        component:  CreateSupplierComponent
      },
      {
        path:  'edit-supplier/:id',
        component:  EditSupplierComponent
      }
  ]},
  { path: 'customer-dashboard', component: CustomerDashboardComponent,
    children: [
      {
        path:  'my-orders',
        component:  MyOrdersComponent,
      },
      {
        path:  'order-detail/:id',
        component:  OrderDetailComponent
      }
  ]},
  { path: '**', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
