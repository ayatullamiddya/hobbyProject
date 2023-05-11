import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHobbyCompComponent } from './body/add-hobby-comp/add-hobby-comp.component';
import { DisplayHobbyCompComponent } from './body/display-hobby-comp/display-hobby-comp.component';
import { ErrorCompComponent } from './error/error-comp/error-comp.component';
import { HeaderCompComponent } from './header/header-comp/header-comp.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
