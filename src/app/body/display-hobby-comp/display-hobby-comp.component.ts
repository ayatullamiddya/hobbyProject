import { Component, OnInit } from '@angular/core';
import { HobbyServiceService } from 'src/app/myservice/hobby-service.service';

@Component({
  selector: 'app-display-hobby-comp',
  templateUrl: './display-hobby-comp.component.html',
  styleUrls: ['./display-hobby-comp.component.css']
})
export class DisplayHobbyCompComponent implements OnInit {
  HobbyArray : String[] = [];
  


  constructor(private myservice:HobbyServiceService) { 
  //  myservice.hobbyDisplayCom = this;
  }
data :any;
  ngOnInit(): void {
    this.data = localStorage.getItem("hobbies");

    if( this.data){
      console.log(this.data);
     this.HobbyArray = JSON.parse(this.data);
     console.log(this.HobbyArray)
    }
  }
  trackById(){
    return this.HobbyArray.length;
  }
  // display(){
  //   console.log("display-comp");
  // //   this.HobbyArray = this.myservice.sendData();
  // //  console.log( this.HobbyArray)
 
    
  // }
 delete(item:any){
    let index = this.HobbyArray.indexOf(item);
    this.HobbyArray.splice(index,1);
    localStorage.setItem("hobbies",JSON.stringify(this.HobbyArray));
 }

}
