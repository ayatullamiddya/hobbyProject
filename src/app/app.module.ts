import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header/header-comp/header-comp.component';
import { AddHobbyCompComponent } from './body/add-hobby-comp/add-hobby-comp.component';
import { DisplayHobbyCompComponent } from './body/display-hobby-comp/display-hobby-comp.component';
import { ErrorCompComponent } from './error/error-comp/error-comp.component';
import { RouterModule } from '@angular/router';
import { HobbyServiceService } from './myservice/hobby-service.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    AddHobbyCompComponent,
    DisplayHobbyCompComponent,
    ErrorCompComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo:'add' ,pathMatch:'full'
        
      },
      {
        path:'add',
        component:AddHobbyCompComponent
      },
      {
        path:'display-hobby',
        component:DisplayHobbyCompComponent
      },{
        path:'**',
        component:ErrorCompComponent
      }
    ])
  ],
  providers: [HobbyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
