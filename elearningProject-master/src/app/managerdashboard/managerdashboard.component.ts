import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Team } from '../Team.class';
import { Course } from '../Course.class';
import { CourseService } from '../course.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerdashboard',
  templateUrl: './managerdashboard.component.html',
  styleUrls: ['./managerdashboard.component.css']
})
export class ManagerdashboardComponent implements OnInit{

  // courses = [
  //   {
  //     courseId: 1,
  //     courseName: "Angular Basics",
  //     instructorRef: [
  //       {
  //         instructorId: 1,
  //         instructorName: "John Doe",
  //         instructorContact: "123456789",
  //         userRef: {
  //           userId: 1,
  //           password: "password123",
  //           email: "john.doe@example.com",
  //           role: "Instructor"
  //         }
  //       }
  //     ],
  //     moduleList: [],
  //     courseDuration: 30,
  //     levelList: [],
  //     category: {
  //       categoryId: 1,
  //       categoryName: "Web Development"
  //     }
  //   }
  // ];

  // Example Teams Data
  // teams = [
  //   {
  //     teamId: 1,
  //     teamName: "Development Team",
  //     employeeList: [
  //       {
  //         employeeId: 1,
  //         employeeName: "Alice",
  //         employeeContact: "987654321",
  //         userRef: {
  //           userId: 1,
  //           password: "password123",
  //           email: "alice@example.com",
  //           role: "Employee"
  //         }
  //       },
  //       {
  //         employeeId: 2,
  //         employeeName: "Bob",
  //         employeeContact: "987654322",
  //         userRef: {
  //           userId: 2,
  //           password: "password123",
  //           email: "bob@example.com",
  //           role: "Employee"
  //         }
  //       }
  //     ]
  //   }
  // ];

  team:Team[]=[{
    teamId: 0,
    teamName: '',
    employeeList: [{
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
    ],
    managerRef: {
      managerId: 0,
      managername: '',
      managerContact: '',
      userRef: {
        userId: 0,
        password: '',
        email: '',
        role: ''
      }
    }
  }
]

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
  fetch: boolean=false;

  constructor(private managerService:ManagerService,private courseService:CourseService,private employeeService:EmployeeService,private route:Router){};

  selectedCourse: any;
  selectedTeam: any;
  selectedEmployee: any;
  showAssignForm: boolean = false;
  managerId:number=0;
 employeesdata=false;


  ngOnInit(): void {
    const userId=Number(sessionStorage.getItem("userId"));
    console.log(userId);
    this.managerService.getTeamsByUser(userId).subscribe((teams)=>
      {
        this.team=teams
        console.log("team:"+this.team);
        this.fetch=true;
      });
    this.courseService.getAllcourses().subscribe((course)=>this.course=course);
    this.managerService.getManagerIdByUserId(userId).subscribe((id)=>this.managerId=id);
  }
  viewEmployees(team: any) {
    this.employeeService.getemployeesByTeam(team.teamId).subscribe(
      (response) => {
        console.log(response);
        this.selectedTeam = response; // Set the team data
        this.employeesdata=true;
        console.log("employees data"+this.selectedTeam);
      },
      (error) => {
        console.error('Error fetching team data', error);
      }
    );
  }


  // Open the form to assign the course
  openAssignForm(course: any) {
    this.selectedCourse = course;
    this.selectedTeam = null;  // Reset selected team
    this.selectedEmployee = null;  // Reset selected employee
    this.showAssignForm = true;  // Show the modal
  }

  // Close the modal form
  closeAssignForm() {
    this.showAssignForm = false;
  }

  // Submit the course assignment
  submitAssignment() {
    if (this.selectedTeam && this.selectedEmployee) {
      console.log(this.selectedTeam?.employeeList);

      console.log(`Assigned ${this.selectedCourse.courseId} to employee ${this.selectedEmployee.employeeId} By ${this.managerId}`);
      this.managerService.assignCourseByManager(parseInt(this.selectedEmployee.employeeId, 10), this.managerId, parseInt(this.selectedCourse.courseId, 10)).subscribe(
        (response)=>{
          console.log(response);
          this.send();
        },
        );
      
      // Close the modal after assignment
      this.closeAssignForm();
    }
  }

  send(){
    this.route.navigate(['/module',this.course[0].moduleList[0].moduleId])
  }
  






}
