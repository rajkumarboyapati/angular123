import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CourseComponent } from './course/course.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { InstructordashboardComponent } from './instructordashboard/instructordashboard.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { StartCourseComponent } from './start-course/start-course.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"admindash",
    component:AdmindashboardComponent
  },
  {
    path:"course",
    component:CourseComponent
  },
  {
    path:"employeedash/:userId",
    component:EmployeedashboardComponent
  },
  {
    path:"instructordash",
    component:InstructordashboardComponent
  },
  {
    path:"managerdash",
    component:ManagerdashboardComponent
  },
  {
    path:"quiz/:quizId/:courseId/:employeeId",
    component:QuizComponent
  },
  {
    path:"course/:courseId/:employeeId",
    component:StartCourseComponent
  },
  {
    path:"reports",
    component:ReportsComponent
  }
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
