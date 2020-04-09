import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.page.html',
  styleUrls: ['./puzzle.page.scss'],
})
export class PuzzlePage implements OnInit {

  puzzles = {
    1 : {
      defaults : {
        a : "",
        b : "",
        c : "",
        d : ""
      },
      signs : {
        aSign: "+",
        bSign: "+",
        cSign: "+",
        dSign: "+"
      },
      answers : {
        answerA : 14,
        answerB : 10,
        answerC : 16,
        answerD : 15,
      }
    },
    2 : {
      defaults : {
        a : "",
        b : "",
        c : "",
        d : ""
      },
      signs : {
        aSign: "+",
        bSign: "+",
        cSign: "+",
        dSign: "+"
      },
      answers : {
        answerA : 14,
        answerB : 10,
        answerC : 16,
        answerD : 15,
      }
    },
    3 : {
      defaults : {
        a : "",
        b : "",
        c : "",
        d : ""
      },
      signs : {
        aSign: "+",
        bSign: "+",
        cSign: "+",
        dSign: "+"
      },
      answers : {
        answerA : 14,
        answerB : 10,
        answerC : 16,
        answerD : 15,
      }
    }
  }

  a = "";
  b = "";
  c = "";
  d = "";

  aSign = "+";
  bSign = "+";
  cSign = "+";
  dSign = "+";

  errors = [];
  answerA = 14;
  answerB = 10;
  answerC = 16;
  answerD = 15;
  // A + B = 
  // C + D
  // A + C
  // B + D  
  constructor( ) { }
   
  
  ngOnInit() {
    
  }

  onSubmit() {
    this.errors = [];
 
    if ( parseFloat(this.a) + parseFloat(this.b) != this.answerA )
      this.errors.push("A + B must be equal to " + this.answerA);

    if ( parseFloat(this.c) + parseFloat(this.d) != this.answerB ) 
      this.errors.push("C + D must be equal to " + this.answerB);

    if ( parseFloat(this.a) + parseFloat(this.c) != this.answerC )
      this.errors.push("A + C must be equal to " + this.answerC);

    if ( parseFloat(this.b) + parseFloat(this.d) != this.answerD ) 
      this.errors.push("B + D must be equal to " + this.answerD);
    
  }

}
