import { Injectable, getModuleFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toy } from './../models/toy';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  toys: Toy[] = [];
  // t1 = new Toy(11);
  // t1 = new Toy(24.95, 'Les Dollie Toffee Apple', 'Female', 'Toddler');
  // t2 = new Toy(12.95, 'Hoppity Ball 26 inch', '3_to_5', 'Neutral');
  // t3 = new Toy(12.95, '43 Piece dinner Set', '3_to_5', 'Female');
  // this.toys.push(t1)

  constructor(private http: HttpClient) { }

  getToy(): Observable<Toy[]> {
    // const t1 = new Toy(11);
    const t1 = new Toy(24.95, 'Les Dollie Toffee Apple', 'Female', 'Toddler');
    const t2 = new Toy(12.95, 'Hoppity Ball 26 inch', '3_to_5', 'Neutral');
    const t3 = new Toy(12.95, '43 Piece dinner Set', '3_to_5', 'Female');
    this.toys.push(t1, t2, t3);
    return of(this.toys);
  }

  
  // getAllProduct(): Observable<Toy[]> {
  //   return;
  //   // return of(mockProduct);
  //   // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  // }


}