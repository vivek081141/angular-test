import { Component } from '@angular/core';
import {Hero} from "../hero";
import {TwoWayDatabindingComponent} from "../two-way-databinding/two-way-databinding.component";

@Component({
  moduleId: module.id,
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
 // directives: [TwoWayDatabindingComponent]
})
export class PrimaryComponent{
  flag=false;
  person={
    name:'Vivek',
    age:27
  };
  appStatus="appStatus";
  appTitle="appTitle";
  title = 'The Strom Of Heroes';
  heroes= [
    new Hero('1','Undertaker'),
    new Hero('2','Kane'),
    new Hero('3','Triple H'),
  ];
  hero=this.heroes[0];

  public onClick(){
    console.log(this.flag);
    this.flag=!this.flag;
  }

}
