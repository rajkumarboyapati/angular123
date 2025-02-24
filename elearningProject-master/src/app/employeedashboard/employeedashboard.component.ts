import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee.class';
import { Instructor } from '../Instructor.class';
import { Level } from '../Level.class';
import { Category } from '../Category.class';
import { Modules } from '../Modules.class';

interface Course {
  courseId: number;
  courseName: string;
  instructorRef: Instructor[];
  moduleList: Modules[];
  courseDuration: number;
  levelList: Level[];
  category: Category;
  enrolled?: boolean;
  errorMessage?: string;
}

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit{

  enrolled=false;
  data=false;
  selectedCategory: string = '';
  selectedLevel: string = '';
  selectedInstructor:string='';
  isVisible: boolean = false;

  userId=0;
  filteredCourses: any[] = [];

  employee:Employee={
    employeeId: 0,
    employeeName: '',
    employeeContact: '',
    userRef: {
      userId: 0,
      password: '',
      email: '',
      role: ''
    }
  }

  course:Course[]=[{
    courseId: 0,
    courseName: "",
    instructorRef: [
      {
        instructorId: 0,
        instructorName: "",
        instructorContact: "",
        userRef: {
          userId: 0,
          password: "",
          email: "",
          role: ""
        }
      }
    ],
    moduleList: [
      {
        moduleId: 0,
        moduleName: "",
        moduleContent: "",
        materialType: "",
        materialName: "",
        quizRef: {
          quizId: 0,
          quizName: "",
          questionsList: [
            {
              questionId: 0,
              questionName: "",
              option1: "",
              option2: "",
              option3: "",
              option4: "",
              correctAnswer: "",
              weightage: 0
            }
          ]
        },
        vedioRef: [
          {
            vedioId: 0,
            vedioName: "",
            contentType: "",
            contentName: ""
          }
        ]
      }
    ],
    courseDuration: 0,
    levelList: [
      {
        levelId: 0,
        levelName: ""
      }
    ],
    category: {
      categoryId: 0,
      categoryName: ""
    }
  }
  ]
  constructor(private courseService:CourseService,private route:ActivatedRoute,private employeeService:EmployeeService,private router:Router){};
  ngOnInit(): void {
    this.userId=Number(this.route.snapshot.paramMap.get('userId'));
    this.employeeService.getEmployeeByUser(this.userId).subscribe((response)=>this.employee=response);
    console.log(this.userId);
    this.courseService.getAllcourses().subscribe((course)=>{
      this.course=course
      this.filteredCourses = course; // Initially, show all courses
      this.data = true;
    });
    this.data=true;
  }

  enroll(course: any): void {
    console.log(`Enrolled in course with ID: ${course.courseId}`);
    this.employeeService
      .CourseAssignedToEmployee(course.courseId, this.employee.employeeId) // Assuming employeeId is 1, replace with actual employee ID
      .subscribe(
        (response) => {
          if (response) {
            course.enrolled = true; // Set enrolled to true if successful
          } else {
            course.errorMessage = 'This course is not assignable to you.';
          }
        },
        (error) => {
          console.error('Error enrolling in course', error);
          course.errorMessage = 'Error enrolling in course.';
        }
      );
  }

  startCourse(course: any): void {
    this.router.navigate(['/course', course.courseId, this.employee.employeeId]); // Update this route to match your actual route configuration
  }

  applyFilter() {
    this.filteredCourses = this.course.filter(
      (course) =>
        (this.selectedCategory ? course.category.categoryName === this.selectedCategory : true) &&
        (this.selectedLevel ? course.levelList.some((level) => level.levelName === this.selectedLevel) : true) &&
        (this.selectedInstructor ? course.instructorRef.some((instructor) => instructor.instructorName === this.selectedInstructor) : true)
    );
    this.isVisible = true;
  }
}



