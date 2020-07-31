import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToyListComponent } from './toy-list/toy-list.component';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PaymentComponent } from './payment/payment.component';
import { CalculatePipe } from './pipes/calculate.pipe';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    ToyListComponent,
    ToyDetailComponent,
    ShippingDetailComponent,
    ShoppingCartComponent,
    ShippingAddressComponent,
    PaymentComponent,
    CalculatePipe,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
