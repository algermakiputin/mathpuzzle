import { Component, OnInit } from '@angular/core';   
import { Router } from '@angular/router';
import * as data from "../../assets/puzzle.json";
import { GlobalService } from "../global.service"; 
 
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
 
@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.page.html',
  styleUrls: ['./puzzle.page.scss'],
})
export class PuzzlePage implements OnInit {
  
  puzzles: any;

  animate = false;
  minutes = 0;
  seconds = 0;
  problem; // Stores of the puzzle level to solve
  errors = []; //  Stores every errors
  nextStage = false; // When all answer are correct, will be set to true to proceed to next level.
   
  constructor(
    private router: Router, 
    public global: GlobalService,
    private admobFree: AdMobFree
    ) {
     
    global.stage = parseInt(this.get_storage());  
    this.puzzles = data; 
    this.puzzles = this.puzzles.default;
    
    this.showBanner();
    
  }

  

  showBanner() {
    const bannerConfig: AdMobFreeBannerConfig = {  
      isTesting: true,
      autoShow: true
    }
    this.admobFree.banner.config(bannerConfig);
    
    this.admobFree.banner.prepare()
      .then(() => {
          
      })
      .catch(e => console.log(e));

  }

  ngOnInit() { 
 
 
    

    this.start_timer();
 
    this.problem = this.puzzles[this.global.stage];  
  }

  onSubmit() {
    this.errors = []; 

    // Block A and D  
    if ( this.operation ( this.problem.operators.setA, this.problem.inputs.a, this.problem.inputs.b ) 
        != this.problem.answers.answerA )
        this.errors.push("A "+ this.problem.operators.setA +" B must be equal to " + this.problem.answers.answerA);

    if ( this.operation ( this.problem.operators.setB, this.problem.inputs.c, this.problem.inputs.d ) 
      != this.problem.answers.answerB )
      this.errors.push("C "+ this.problem.operators.setB +" D must be equal to " + this.problem.answers.answerB);

    if ( this.operation ( this.problem.operators.setC, this.problem.inputs.b, this.problem.inputs.d ) 
      != this.problem.answers.answerD )
      this.errors.push("A "+ this.problem.operators.setC +" C must be equal to " + this.problem.answers.answerC);

    if ( this.operation ( this.problem.operators.setD, this.problem.inputs.a, this.problem.inputs.c ) 
      != this.problem.answers.answerC )
      this.errors.push("B "+ this.problem.operators.setD +" D must be equal to " + this.problem.answers.answerD);
 
 
    if ( !this.errors.length ) {

      this.problem.inputs.a = "";
      this.problem.inputs.b = "";
      this.problem.inputs.c = "";
      this.problem.inputs.d = "";
       
      this.nextStage = true; 
      alert("Congratulations! you solved the puzzle, Ready for the next round");
      
      this.nextRound();
    }
    
  }

  operation(sign, a ,b) {
 
    if ( sign == "+" ) {
      return parseFloat(a) + parseFloat(b);
    }
       
    return parseFloat(a) - parseFloat(b);

  }

  nextRound() {

    if (this.global.stage == 10) {
      alert( "You win! Congratulations");
      window.localStorage.setItem("stage", "1");
      window.localStorage.setItem("continue", "false");
      this.router.navigate(['/congratulations']);
      
      this.global.stage = 1;
      this.global.continue = "false";
        
      return false;

    }
      
     
    this.reset_time();
    this.set_storage();
    this.entrance();
    this.problem = this.puzzles[this.global.stage];
    
    this.global.continue = "true";
    this.start_timer();
  }   

  entrance() {

    this.animate = true;
 
    setTimeout(() => {
      this.animate = false;
    }, 1000);

    return false;
  }

  set_storage() {
     
    let storage : any;
    storage = this.get_storage();

    storage = storage == null ? 1 : parseInt(storage);
     
    storage++; 
    this.global.stage = storage; 

    if (storage > 1)
      window.localStorage.setItem("continue", "true");

    window.localStorage.setItem("stage", storage.toString());
  }

  get_storage() {

    return window.localStorage.getItem('stage');
    
  }
  
  
  pad2(number) {
    return (number < 10 ? '0' : '') + number
  }

  start_timer() {

    setInterval(() => {
      
      this.seconds++;

      if (this.seconds > 60) {

        this.seconds = 0;
        this.minutes++;
      }
    }, 2000);
  }
  
  reset_time() {
    this.minutes = 0;
    this.seconds = 0;
  }

  backToHome() {

    this.router.navigate(['/']);
  } 

  
  
}
