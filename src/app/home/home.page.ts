import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from "../global.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  stage: any;
  continue: any;
  constructor(
    private router: Router,
    public global: GlobalService ) { 
 
    global.stage = window.localStorage.getItem("stage"); 
    this.continue = window.localStorage.getItem("continue");

 
  }

  ngOnInit() {
    
  }

  playGame() {

    if ( parseInt(this.global.stage) > 1) {
   
      window.localStorage.setItem('stage', "1");
      window.localStorage.setItem('continue', "false");
      this.continue = false;
      this.global.stage = 1;
 
    }
 

    this.router.navigate(['/puzzle']);

  }

  continue_play() {

    this.router.navigate(['/puzzle']);

  }


 
 

}
