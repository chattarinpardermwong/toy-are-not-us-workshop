import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route :string;
  status : boolean;
  constructor(){

  }

  ngOnInit(): void {
  }
  title = 'toy-are-not-us-workshop';
}
