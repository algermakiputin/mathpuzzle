import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  stage: any;
  constructor(private router: Router) { 
 
    this.stage = window.localStorage.getItem("stage");
  }

  ngOnInit() {
  }

  playGame() {

    this.router.navigate(['/']);

  }
 
 

}
