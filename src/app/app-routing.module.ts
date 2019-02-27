import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimerComponent} from './timer/timer.component'

const routes: Routes = [
  {
path:'timer',
component:TimerComponent
  },
  {
    path:'',
    redirectTo:'/timer',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
