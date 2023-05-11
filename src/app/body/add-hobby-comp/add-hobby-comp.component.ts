import { Component, OnInit } from '@angular/core';
import { HobbyServiceService } from 'src/app/myservice/hobby-service.service';

@Component({
  selector: 'app-add-hobby-comp',
  templateUrl: './add-hobby-comp.component.html',
  styleUrls: ['./add-hobby-comp.component.css']
})
export class AddHobbyCompComponent implements OnInit {

  HobbyArray : String[] = [];
  HobbyArray1 : String[] = [];
  inputValue1: String = "";
  constructor( private myservice:HobbyServiceService) { }

  ngOnInit(): void {
   
  }
  isBlank = false;
  added:any;
  addHobby(){
    if( this.inputValue1 == ""){
      this.isBlank = true;
      return;
    }
    this.HobbyArray.push( this.inputValue1);
    this.inputValue1 ="";
    
     this.isBlank = false;
      let prev = localStorage.getItem("hobbies");
     
      if(prev)
         this.HobbyArray1 = JSON.parse(prev);
      this.HobbyArray = this.HobbyArray.concat(this.HobbyArray1);

    localStorage.setItem("hobbies",JSON.stringify(this.HobbyArray));
    let data = localStorage.getItem("hobbies");
    this.HobbyArray = [];
     this.added = "hobby added";
     setTimeout(() => {
       this.added = "";
     }, 1000);
 
  }
}


