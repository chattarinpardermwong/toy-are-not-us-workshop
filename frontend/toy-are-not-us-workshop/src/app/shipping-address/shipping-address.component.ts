import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent  {

  constructor(private activate:ActivatedRoute) { }
  id : number;
  ngOnInit(): void {
    this.activate.params.subscribe(
      params=>{
        this.id = params.id;
      }
    )
  }

}
