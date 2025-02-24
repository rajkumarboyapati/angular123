import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';
import { Instructor } from '../Instructor.class';
import { Course } from '../Course.class';
import { Router } from '@angular/router';
import { Reports } from '../Reports.class';
import { SupportService } from '../support.service';
import { Support } from '../Support';
import { Observable } from 'rxjs';
import { User } from '../User.class';

@Component({
  selector: 'app-instructordashboard',
  templateUrl: './instructordashboard.component.html',
  styleUrls: ['./instructordashboard.component.css']
})
export class InstructordashboardComponent implements OnInit {
  userId:number;
constructor(private instructorService:InstructorService,private r:Router,private supportservice:SupportService){
  this.userId=parseInt(sessionStorage.getItem("userId"));
  console.log(this.userId+"hii");
}
  ngOnInit(): void {
    this.instructorService.getInstructorByUserId(this.userId).subscribe((respose)=>{
      this.instructor=respose;
      console.log(this.instructor);
      if (this.instructor && this.instructor.userRef) {
        this.support.user = { ...this.instructor.userRef }; // Copy userRef to support.user
      }
    });
  }
instructor:Instructor={
  
    instructorId: 0,
    instructorName: "",
    instructorContact: "",
    userRef: {
      userId: 0,
      password: "",
      email: "",
      role: "Instructor"
    
  },
};

course:Course[];
addCourse():void{

  // this.instructorService.addCourse(this.course).subscribe((Response)=>{this.course=Response
  // console.log(this.course);}
// );
this.r.navigate(['/course']);
}
getInstructorBYusrId(){
this.instructorService.getInstructorByUserId(this.userId).subscribe((respose)=>{
  this.instructor=respose;
  console.log(this.instructor);
  
});}
getCoursesByInstructorName(){
  this.instructorService.getCoursesByInstructorName(this.instructor.instructorName).subscribe((response)=>{this.course=response
    console.log(this.course);
  });
}
reports:Reports[]=[];
getReportsByInstructorId():void{
  console.log(this.instructor.instructorId);
  this.instructorService.getReportsByInstructorId(this.instructor.instructorId).subscribe((response)=>{this.reports=response;
    console.log(this.reports);
  }
);
  

}
showCourses: boolean = false;
toggleCourses() {
  this.showCourses = !this.showCourses;

  if (this.showCourses) {
    this.getInstructorBYusrId();
    setTimeout(() => {
      this.getCoursesByInstructorName();
    }, 500); // Small delay to ensure instructor data loads
  }
}
showReports: boolean = false;
toggleReports() {
  this.showReports = !this.showReports;
  if (this.showReports) {
    this.getInstructorBYusrId();
    setTimeout(() => {
      this.getReportsByInstructorId();
    }, 500); // Small delay to ensure instructor data loads
  }
}
support:Support={
  supportId: 1,
  supportName: "",
  supportType: "",
  // user: {
  //   userId: this.instructor.userRef.userId,
  //   email: this.instructor.userRef.email,
  //   password: this.instructor.userRef.password,
  //   role: this.instructor.userRef.role
  // },
  user:new User(),
  status: '',
  issue: ''
};
showSupport: boolean = false;
addSupport():void{
  this.supportservice.addsupport(this.support).subscribe((response)=>{
    this.support=response;
    console.log(this.support);
    
    alert("Support request submitted successfully!");
      this.showSupport = false;
  })
}
toggleSupport() {
  this.showSupport = !this.showSupport;
  if (this.showReports) {
    this.getInstructorBYusrId();
    setTimeout(() => {
      this.getReportsByInstructorId();
    }, 500); // Small delay to ensure instructor data loads
  }
}




}
