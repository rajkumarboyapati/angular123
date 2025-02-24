import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { Quiz } from '../Quiz.class';
import { Question } from '../Question.class';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

  moduleId:string;
  fetch=false;
  employeeId:number=0;
  courseId: number;
  selectedOptions: { [key: number]: string } = {}; 
  selectedAnswers: any[] = []; 
  questions:Question[]=[{
    questionId: 0,
    questionName: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctAnswer: '',
    weightage: 0,
     // Optional field to store selected option
  }]
  

  constructor(private route:ActivatedRoute,private quizservice:QuizService){}
  ngOnInit(): void {

    this.moduleId=this.route.snapshot.paramMap.get('quizId');
    this.employeeId=Number(this.route.snapshot.paramMap.get('employeeId'));
    this.courseId=Number(this.route.snapshot.paramMap.get("courseId"));
    this.getQuiz();
    
  }

  getQuiz(){
    let id=parseInt(this.moduleId);
    console.log(id);
    this.quizservice.getQuiz(id).subscribe((p)=>this.questions=p);
    this.fetch=true;
    this.questions.forEach((question) => {
      this.selectedOptions[question.questionId] = ''; // Initially no option selected
    });
  }

  submitQuiz() {
    // Log the quiz answers and selected options for now
    console.log('Quiz Submitted!');
    console.log(this.questions);
    this.selectedAnswers = this.questions.map((question) => {
      return this.selectedOptions[question.questionId];  // Directly map to the selectedOption value
    });
    const quizId=parseInt(this.moduleId);
    this.quizservice.getAnswers(this.selectedAnswers,quizId,this.employeeId,this.courseId ).subscribe(
      (response) => {
      console.log(response)
      });
    console.log('Selected Answers:', this.selectedAnswers); // Check the selected answers
  }





}
