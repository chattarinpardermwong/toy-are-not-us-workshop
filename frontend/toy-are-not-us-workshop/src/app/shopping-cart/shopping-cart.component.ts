import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Toy } from '../models/toy';
import { Shipping } from './../models/Shipping';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  toy:Toy
  ship :Shipping[]
  shipID : number	;
  price :number;
  constructor(private activateRoute:ActivatedRoute , private network:NetworkService) { }
  // @Input("toy-target") toyTarget : ToyDisplay;
  id:number;
  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      param=>{
        this.id = param.id;
        this.feedData(this.id);

      }
    )
  }

  feedData(id:number){
     this.network.getToyByID(id).subscribe(
       data=>{
        //  console.log(data)
         this.toy = data;
      //  var {id, name,price,age,gender,quantity,status}  = {... data}

       }
     )
     this.network.getShipping().subscribe(
       data=>{
         console.log(data)
         this.ship = data;
       }
     )
  }
  onSelectionChange(num:number){
      this.shipID = num;
      this.price = this.ship[num].shipFee
      // console.log(typeof(this.shipID))
      // console.log(this.shipID)
  }
}
