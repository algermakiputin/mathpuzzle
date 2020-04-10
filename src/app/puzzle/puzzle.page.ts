import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular'; 

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.page.html',
  styleUrls: ['./puzzle.page.scss'],
})
export class PuzzlePage implements OnInit {

  operator = {
    "+": "plus",
    "-": "minus"
  }
  puzzles = {
    1 : {
      inputs : {
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
      },
      operators: {
        "setA" : "+", // A + B
        "setB" : "+", // B + D
        "setC" : "-", // C + D
        "setD" : "+", // A + C
      },
      functions: {
        plus : function(a, b) {
          return a + b;
        },
        minus : function(a, b) {
          return a + b;
        }
      }
    },
    
  }

  level = 1;
  problem = [];
  errors = [];
  nextStage = false;
 
  constructor( 
    private storage: Storage,
    public modalController: ModalController  
  ) { 

    storage.get('level').then( (val) => {
      
      if (val) 
        this.level = val;

    });

    this.problem = this.puzzles[this.level];
     
  }
   
  
  ngOnInit() {
    
  }

  onSubmit() {
    this.errors = [];
    
    
    
    // if ( parseFloat(this.problem.inputs.a) + parseFloat(this.problem.inputs.b) != this.problem.answers.answerA )
    //   this.errors.push("A + B must be equal to " + this.answerA);

    // if ( parseFloat(this.problem.inputs.c) + parseFloat(this.problem.inputs.d) != this.problem.answers.answerB ) 
    //   this.errors.push("C + D must be equal to " + this.answerB);

    // if ( parseFloat(this.problem.inputs.a) + parseFloat(this.problem.inputs.c) != this.problem.answers.answerC )
    //   this.errors.push("A + C must be equal to " + this.answerC);

    // if ( parseFloat(this.problem.inputs.b) + parseFloat(this.problem.inputs.d) != this.problem.answers.answerD ) 
    //   this.errors.push("B + D must be equal to " + this.answerD);

    // Ans: 1.5, 12.5, 13.5, 3.5
    if ( !this.errors.length ) {

      this.nextStage = true;

      this.storage.get("level").then( (val) => {

        this.storage.set('level', parseInt(val) + 1);
      
      });


      this.storage.get("level").then( (val) => {

        console.log(val)
      });
    }
    
  }
 
}
