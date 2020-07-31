import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToyDisplay, Toy } from '../models/toy';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-toy-detail',
  templateUrl: './toy-detail.component.html',
  styleUrls: ['./toy-detail.component.css']
})
export class ToyDetailComponent implements OnInit {
  toy : Toy;
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
         console.log(data)
         this.toy = data;
      //  var {id, name,price,age,gender,quantity,status}  = {... data}

       }
     )
  }






}
