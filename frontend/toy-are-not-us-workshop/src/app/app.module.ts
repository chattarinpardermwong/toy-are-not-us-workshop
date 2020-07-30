import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToyListComponent } from './toy-list/toy-list.component';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToyListComponent,
    ToyDetailComponent,
    ShippingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
