import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz List';
  quizzes = [
    {
      id: '0001',
      order: 1,
      name: 'Quiz 1',
      showDelete: false
    },        
    {
      id: '0002',
      order: 2,
      name: 'Quiz 2',
      showDelete: false
    },        
    {
      id: '0003',
      order: 3,
      name: 'Quiz 3',
      showDelete: false
    },        
  ];
  
  calc = {
          inputs: [
              {
                label: 'input1',
                value:  0      
              },
              {
                label: 'input2',
                value: 0      
              },
              {
                label: 'input3',
                value: 0      
              },
              {
                label: 'input4',
                value: 0      
              }
            ],
            sum: 0,
            sub: 0,
            mul: 0,
            div: 0,
            performSum: function() {      
              let total:number = 0;    
              this.inputs.forEach(element => {
                total += Number(element.value);
              });
              this.sum = total;              
            },
            performSub: function() {
              let first:number;
              let total:number;    
              this.inputs.forEach(element => {
                if(!first) {
                  first = Number(element.value);
                  total = Number(element.value);
                } else {
                  total = total - Number(element.value);
                }
              });
              this.sub = total;              
            },
            performMul: function() {      
              let first:number;
              let total:number;      
              this.inputs.forEach(element => {
                if(!first) {
                  first = Number(element.value);
                  total = Number(element.value);
                } else {
                  total = total * Number(element.value);
                }
              });
              this.mul = total;              
            },
            performDiv: function() {      
              let first:number;
              let total:number;      
              this.inputs.forEach(element => {
                if(!first) {
                  first = Number(element.value);
                  total = Number(element.value);
                } else {
                  total = total / Number(element.value);
                }
              });     
              this.div = total;          
            }            
  }
  // sum: ()=>{}

  public performAllCalculations() {
    // Perform sum calc
    this.calc.performSum();
    this.calc.performSub();
    this.calc.performMul();
    this.calc.performDiv();
  }

  input1 = 0;
  input2 = 0;
  additionAnswer = 0;

  newQuizName = '';

  public addFunnyQuiz() {        
    let newQuiz = this.insertQuiz('Funny Quiz', false);    
    this.quizzes.push(newQuiz);    
  }
  
  public insertQuiz(name, showDelete) {
    let order = this.quizzes.length;
    
    // TODO/NOTE: this is where the Quiz is inserted and a ID is returned.
    let id = 'db-id-' + order; // BAD :)
    // TODO/NOTE: this is where if an error occured display "Error" on page...

    let newQuiz = {
      id: id,
      name: name,
      order: order,
      showDelete: showDelete
    }; 

    return newQuiz;
  }

  public deleteQuiz(quizToDelete) {
    this.quizzes = this.quizzes.filter((quiz) => quiz !== quizToDelete);
  }

  public addNewQuiz() {
    let newQuiz = this.insertQuiz(this.newQuizName, true);    
    this.quizzes.push(newQuiz);
    this.resetNewQuizName();
    // TODO change focus
  }

  public resetNewQuizName() {
    this.newQuizName = '';
  }

 
} 

interface InputNumber {
  label: string;
  value: number;
}