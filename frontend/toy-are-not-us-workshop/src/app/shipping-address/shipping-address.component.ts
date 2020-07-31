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
  shipID : number;
  ngOnInit(): void {
    this.activate.params.subscribe(
      params=>{
        this.shipID = params.shipID
        this.id = params.id;
      }
    )
  }

}
