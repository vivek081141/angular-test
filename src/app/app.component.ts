import { Component } from '@angular/core';
import {Hero} from "./hero";
import {PrimaryComponent} from "./primary/primary.component";
import {DataBindinggComponent} from "./data-bindingg/data-bindingg.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: ``,
  styleUrls: ['./app.component.css']
 // directives: [PrimaryComponent,DataBindinggComponent]
})
export class AppComponent {
  appStatus="Welcome";
  appTitle="WELCOME";
  title = 'The Strom Of Heroes';
  person ={
    name:'vivek',
    age:'28'
  }
}
