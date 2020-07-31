import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';
import { ToyListComponent } from './toy-list/toy-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  // {path:'', redirectTo: '/toylist',pathMatch: 'full'},

  {path:'toylist/toydetail/:id', component: ToyDetailComponent},
  {path:'toylist', component: ToyListComponent},
  {path:'toylist/toydetail/toyshoping/:id',component: ShoppingCartComponent },
  {path:'toyshoping/shipaddress/:id',component: ShippingAddressComponent},
  {path:'shipaddress/payment',component: PaymentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
