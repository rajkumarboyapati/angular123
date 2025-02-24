import { Component, OnInit } from '@angular/core';
import { Reports } from '../Reports.class';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
  
  constructor(private reportsService:ReportsService){};
  reports:Reports[]=[{
    reportId: 0,
    progress: 0,
    employeeRef: {
      employeeId: 0,
      employeeName: '',
      employeeContact: '',
      userRef: {
        userId: 0,
        password: '',
        email: '',
        role: ''
      }
    },
    courseRef:{
      courseId: 0,
      courseName: '',
      instructorRef: [],
      moduleList: [],
      courseDuration: 0,
      levelList: [],
      category: {
        categoryId: 0,
        categoryName: ""
      }
    },
    quizId: 0,
    quizScore: 0
  }]

  managerId=2;

  ngOnInit(): void {



    this.getReports();
    
  }

  getReports(): void {
    this.reportsService.getReportsForManager(this.managerId).subscribe((data) => {
      this.reports = data;
      console.log(this.reports); // Check the structure of your reports
    });
  }

}
