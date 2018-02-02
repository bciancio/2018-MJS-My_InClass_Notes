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
            div: 0            
  }
  // sum: ()=>{}

  public performAllCalculations() {
    // Perform sum calc
    console.log(this.calc.inputs[0].value);
    this.calc.sum = Number(this.calc.inputs[0].value) + Number(this.calc.inputs[1].value);
    this.calc.sub = Number(this.calc.inputs[0].value) - Number(this.calc.inputs[1].value);
    this.calc.mul = Number(this.calc.inputs[0].value) * Number(this.calc.inputs[1].value);
    this.calc.div = Number(this.calc.inputs[0].value) / Number(this.calc.inputs[1].value);
    console.log(this.calc);
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
  label: String;
  value: Number;
}