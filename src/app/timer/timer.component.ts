import { Component, OnInit } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
 text:string;
 index:any;
  constructor() { }

  ngOnInit() {
    this.text="hello";
    // function timer(i){
    //      setTimeout(() => {
    //        console.log(i);
    //      }, 2000);
    // }
    
    for(var i=1;i<=10;i++){
      (function (i){
        setTimeout(() => {
          document.write( " "+i);
        console.log(i);
        },i*3000);
      })(i);
    }
    // timer(i);
    
  }

}
