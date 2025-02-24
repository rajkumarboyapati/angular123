import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CourseComponent } from './course/course.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { InstructordashboardComponent } from './instructordashboard/instructordashboard.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { StartCourseComponent } from './start-course/start-course.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AdmindashboardComponent,
    CourseComponent,
    EmployeedashboardComponent,
    InstructordashboardComponent,
    ManagerdashboardComponent,
    QuizComponent,
    StartCourseComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
