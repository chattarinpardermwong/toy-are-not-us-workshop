import { Component, OnInit, ElementRef, NgZone, Output, EventEmitter } from '@angular/core';
import { NetworkService } from './../services/network.service';
import { Toy } from '../models/toy';
import { PlatformLocation } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.css']
})
export class ToyListComponent implements OnInit {
  toylist: Toy[] = [];
  feedBegin: boolean;

  @Output('status') status = new EventEmitter<Boolean>();

  name: string;
  constructor(private network: NetworkService) {

  }

  ngOnInit(): void {
    this.network.getToy().subscribe(
      data => {
        if (this.toylist.length == 0 || this.toylist === undefined) {
          this.toylist = data

        }
      }
    )

  }

  searchToy(searchForm:NgForm){
   const form = searchForm;
      this.network.getToyAgeGender(form.value.gender, form.value.age).subscribe(
        data=>{
          this.toylist = data
        }
      )
  }

}
