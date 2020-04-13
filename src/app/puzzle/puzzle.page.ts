import { Component, OnInit } from '@angular/core'; 
import { Storage } from "@ionic/storage";   
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.page.html',
  styleUrls: ['./puzzle.page.scss'],
})
export class PuzzlePage implements OnInit {
  
  puzzles = {
    1 : {
      inputs : { 
        a : "3.5",
        b : "4.5",
        c : "9.5",
        d : "3.5"
      }, 
      answers : {
        answerA : 8,  
        answerB : 6,
        answerC : 13,
        answerD : 8,
      },
      operators: {
        "setA" : "+",  // A + B
        "setB" : "-",  // C + D
        "setC" : "+",  // A & C
        "setD" : "+",  // B & D
      }
    },

    2 : {
      inputs : { 
        a : "7",
        b : "9",
        c : "19",
        d : "7"
      },
      signs : {
        aSign: "+",
        bSign: "+",
        cSign: "+",
        dSign: "+"
      },
      answers : {
        answerA : 16, // A + B
        answerB : 12, // C + D
        answerC : 26, // A + C
        answerD : 16, // B + D
      },
      operators: {
        "setA" : "+",  // A + B
        "setB" : "-",  // C + D
        "setC" : "+",  // A + C
        "setD" : "+",  // B + D
      }
    },
    
    3 : {
      inputs : { 
        a : "1.5",
        b : "12.5",
        c : "13.5",
        d : "3.5"
      }, 
      answers : {
        answerA : 14, // A + B
        answerB : 10, // C + D
        answerC : 15, // A + C
        answerD : 16, // B + D
      },
      operators: {
        "setA" : "+",  // A + B
        "setB" : "-",  // C + D
        "setC" : "+",  // A + C
        "setD" : "+",  // B + D
      }
    },
 
  }

  animate = false;
  minutes = 0;
  seconds = 0;
  stage = 1; // The current Puzzle to solve
  problem; // Stores of the puzzle level to solve
  errors = []; //  Stores every errors
  nextStage = false; // When all answer are correct, will be set to true to proceed to next level.
   
  constructor(public storage: Storage) { 
    
    window.localStorage.setItem('stage', '1');
    this.stage = parseInt(this.get_storage()); 
 
    
  }

  ngOnInit() { 
 
    this.start_timer();
    this.problem = this.puzzles[this.stage];  
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

      this.nextStage = true; 
       
      alert("Ready for next round");
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

    if (this.stage == 10) 
      return alert( "You win! Congratulations");
     
    this.reset_time();
    this.set_storage();
    this.entrance();
    this.problem = this.puzzles[this.stage];
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
    this.stage = storage; 

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
    }, 1000);
  }
  
  reset_time() {
    this.minutes = 0;
    this.seconds = 0;
  }
  
}
