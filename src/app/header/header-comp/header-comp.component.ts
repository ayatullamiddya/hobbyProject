import { Component, OnInit } from '@angular/core';
import { HobbyServiceService } from 'src/app/myservice/hobby-service.service';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {

 
  constructor(private myservice:HobbyServiceService) { }
  
  ngOnInit(): void {
  }
  display(){
    console.log("display-header");
    //  this.myservice.hobbyDisplay();
  }
}
