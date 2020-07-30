import { Component, OnInit } from '@angular/core';
import { NetworkService } from './../services/network.service';
import { Toy } from '../models/toy';

@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.css']
})
export class ToyListComponent implements OnInit {
  toy: Toy[] = [];
  constructor(private network: NetworkService) { }

  ngOnInit(): void {
    this.network.getToy().subscribe((data) => this.toy = data);
  }

  getToyName(name: string) {
    return (this.toy.filter(p => p.name === name)[0]);
  }

}
