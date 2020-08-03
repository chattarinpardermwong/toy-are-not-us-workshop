import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworkService } from '../services/network.service';
import { Toy } from '../models/toy';
import { Shipping } from '../models/Shipping';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  toy:Toy;
  ship:Shipping;

  id : number;
  constructor(private activate:ActivatedRoute, private  network:NetworkService) { }
  ngOnInit(): void {
    this.activate.params.subscribe(
      params=>{
        this.id = params.id;
      }
    )
    this.feedData(this.id);
  }

  feedData(id:number){
    this.network.getToyByID(id).subscribe(
      data=>{
        this.toy = data;
     //  var {id, name,price,age,gender,quantity,status}  = {... data}

      }
    )
    this.network. getShipByid(id).subscribe(
      data=>{
        this.ship = data;
     //  var {id, name,price,age,gender,quantity,status}  = {... data}

      }
    )

 }


}
