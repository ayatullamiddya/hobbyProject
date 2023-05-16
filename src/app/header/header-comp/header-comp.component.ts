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

  remove(){
  var  nav_button = document.getElementById("navbarbutton");
  var  mynav_bar = document.getElementById("mynavbar");

    if(nav_button != null && mynav_bar != null){
     
      nav_button.classList.add('collapsed')
      nav_button.setAttribute('aria-expanded','false')
      mynav_bar.classList.remove('show')
    }else{
      alert("null")
    }
    
  }
}
