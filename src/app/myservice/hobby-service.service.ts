import { Injectable } from '@angular/core';
import { AddHobbyCompComponent } from '../body/add-hobby-comp/add-hobby-comp.component';
import { DisplayHobbyCompComponent } from '../body/display-hobby-comp/display-hobby-comp.component';

@Injectable({
  providedIn: 'root'
})
export class HobbyServiceService {
   hobbyDisplayCom :any;  
  constructor() { }
  hobbyArray = [];//hgjhg,ghghj
  receiveData(hobbyArray1:any){
    console.log("add-service");
    this.hobbyArray = this.hobbyArray.concat(hobbyArray1);
    console.log(this.hobbyArray)
  }
  sendData(){
    console.log(this.hobbyArray);
    return this.hobbyArray;
  }
  hobbyDisplay(){
    console.log(this.hobbyDisplayCom)
    console.log("display-service");
    this.hobbyDisplayCom.display();

  }
  
}
