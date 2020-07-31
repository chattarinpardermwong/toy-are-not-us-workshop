import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import { NetworkService } from './../services/network.service';
import { Toy, ToyDisplay } from '../models/toy';
@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.css']
})
export class ToyListComponent implements OnInit {
  toylist: Toy[] ;
  // toy  = new ToyDisplay();
  name :string;
  constructor(private network: NetworkService, private zone:NgZone) { }

  ngOnInit(): void {
    this.network.getToy().subscribe((data) => this.toylist = data
    
      )

  }
  // go(){
  //   this.zone.run(()=> this.router.navigate())
  // }
  // ngOnDestroy(): void {
  //   this.elementRef.nativeElement.remove();
    
  // }
  // }

  // onTarget(name:string, age:string , gender:string, price:number,quantity:number, status:boolean){
  //   this.toy.name = name;
  //   this.toy.age = age;
  //   this.toy.gender = gender;
  //   this.toy.price = price;
  //   this.toy.quantity = quantity;
  //   this.toy.status = status;
  //   console.log(this.toylist)
  //   console.log(`${status} ${quantity}`

  //   )
  
  // getToyName(name: string) {
  //   return (this.toy.filter(p => p.name === name)[0]);
  // }

}
