import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Course.class';

@Component({
  selector: 'app-start-course',
  templateUrl: './start-course.component.html',
  styleUrls: ['./start-course.component.css']
})
export class StartCourseComponent implements OnInit{

  employeeId=0;
  courseId:number=0;
  course:Course={
      courseId: 0,
      courseName: "jgjbvb",
      instructorRef: [
        {
          instructorId: 0,
          instructorName: "dff",
          instructorContact: "ffds",
          userRef: {
            userId: 0,
            password: "fghf",
            email: "fghfghh",
            role: "insrtuctor"
          }
        }]
      ,
      moduleList: [
        {
          moduleId: 0,
          moduleName: "jbmbm",
          moduleContent: "jkjhkh",
          materialType: "bnbnbnm",
          materialName: "bnnbn",
          quizRef: {
            quizId: 0,
            quizName: "bnmbmbm",
            questionsList: [
              {
                questionId: 0,
                questionName: "jbjb",
                option1: "bjb",
                option2: "jbmbm",
                option3: "mbmb",
                option4: "mmmbm",
                correctAnswer: "mbmbm",
                weightage: 0
              }
            ]
          },
          vedioRef: [
            {
              vedioId: 0,
              vedioName: "mnmnm",
              contentType: "mnmnm",
              contentName: "mnmnm"
            }
          ]
        }
      ],
      courseDuration: 0,
      levelList: [
        {
          levelId: 0,
          levelName: "mnmnm"
        }
      ],
      category: {
        categoryId: 0,
        categoryName: "mnmnm"
      }
    }
  
  constructor(private courseService: CourseService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId=Number(this.route.snapshot.paramMap.get('courseId'));
    this.employeeId=Number(this.route.snapshot.paramMap.get('employeeId'));
    this.loadCourseContent();
  }

  loadCourseContent(): void {
    
    console.log(this.courseId);
    this.courseService.getCourseById(this.courseId).subscribe((p)=>this.course=p);
  }

  startQuiz(quizId: number): void {
    // Navigate to the quiz component
    console.log(quizId);
    this.router.navigate(['/quiz', quizId,this.courseId,this.employeeId]);  // Make sure the route path matches your setup
  }
}
