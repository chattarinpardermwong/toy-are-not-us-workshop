import { Injectable, getModuleFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toy } from './../models/toy';
import { Shipping } from './../models/Shipping';

import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  toys: Toy[] = [];
  ship: Shipping[] = [];
  constructor(private http: HttpClient) { }

  getToy(): Observable<Toy[]> {
    // const t1 = new Toy(11);
    const t1 = new Toy(0, 24.95, 'Les Dollie Toffee Apple', 'Female', 'Toddler', 7, true);
    const t2 = new Toy(1, 12.95, 'Hoppity Ball 26 inch', '3_to_5', 'Neutral', 9, true);
    const t3 = new Toy(2, 12.95, '43 Piece dinner Set', '3_to_5', 'Female', 0, false);
    this.toys.push(t1, t2, t3);
    console.log(this.toys)
    return of(this.toys);
  }

  getShipping(): Observable<Shipping[]>{
    const s1 = new Shipping(0,"Kerry",35);
    const s2 = new Shipping(1,"EMS",30);
    const s3 = new Shipping(2,"Line man",20);

    this.ship.push(s1, s2, s3);
    // console.log(this.toys)
    return of(this.ship);
  }

    
  // getShipByid(id :number): Observable<Shipping> {
  //   return of(this.ship.filter(
  //       item => item.id == id)[0])
  //   // return of(mockProduct);
  //   // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  // }
  getToyByID(id :number): Observable<Toy> {
    return of(this.toys.filter(
        item => item.id == id)[0])
    // return of(mockProduct);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }

  // getToyByID(id :number): Observable<Toy> {
  //   return of(this.toys.filter(
  //       item => item.id == id)[0])
  //   // return of(mockProduct);
  //   // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  // }


}
