import { Injectable, getModuleFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toy } from './../models/toy';
import { Shipping } from './../models/Shipping';

import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  ship: Shipping[] = [];
  t1 = new Toy(0, 24.95, 'Les Dollie Toffee Apple', 'Todler', 'Female', 7, true);
  t2 = new Toy(1, 12.95, 'Hoppity Ball 26 inch', '3_to_5', 'Neutral', 9, true);
  t3 = new Toy(2, 12.95, '43 Piece dinner Set', '3_to_5', 'Female', 0, false);
  s1 = new Shipping(0,"Kerry",35);
  s2 = new Shipping(1,"EMS",30);
  s3 = new Shipping(2,"Line man",20);
  constructor(private http: HttpClient) { }

  getToy(): Observable<Toy[]> {
    return of([this.t1,this.t2,this.t3]);
  }

  getShipping(): Observable<Shipping[]>{


    // console.log(this.toys)
    return of([this.s1, this.s2, this.s3]);
  }

  getShipByid(id :number): Observable<Shipping> {
    return of([this.s1, this.s2, this.s3].filter(
        item => item.id == id)[0])
    // return of(mockProduct);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }
  getToyByID(id :number): Observable<Toy> {
    return of([this.t1,this.t2,this.t3].filter(

        item => item.id == id)[0]

        )
    // return of(mockProduct);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }

  getToyAgeGender(gender:string, age:string): Observable<Toy[]>{
    console.log(gender,age)
      return of([this.t1,this.t2,this.t3].filter(
        item => item.gender == gender || item.age == age

        )
      )
  }


}
