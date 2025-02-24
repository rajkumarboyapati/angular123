import { Component, Input } from '@angular/core';
import { Employee } from '../Employee.class';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';
import { InstructorService } from '../instructor.service';
import { manager } from '../Manager.class';
import { Instructor } from '../Instructor.class';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  fetch=false;
  showEmployeeTable: boolean = false;
  showManagerTable: boolean = false;
  showInstructorTable: boolean = false;
  fetchmanager=false;
  fetchinstructor=false;

  Instructors:Instructor[]=[{
    instructorId: 0,
    instructorName: '',
    instructorContact: '',
    userRef: {
      userId: 0,
      password: '',
      email: '',
      role: ''
    }
  }
  ]
  manager:manager[]=[{
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
]
  employees:Employee[]=[
    {
      employeeName: "",
      employeeContact: "",
      userRef: {
        userId:0,
        email: "",
        password: "",
        role: ""
      },
      employeeId: 0
    }
]

  constructor(private service:EmployeeService,private route:Router,private managerService:ManagerService,private instructorService:InstructorService){}


  getemployees(){
    this.service.getAllEmployees().subscribe((employe)=>this.employees=employe);
    this.fetch=true;
    
  }

  getManagers(){
    this.managerService.getAllManagers().subscribe((managerdta)=>this.manager=managerdta);
    this.fetchmanager=true;
  }

  getInstructors(){
    this.instructorService.getAllInstructor().subscribe((instructordata)=>this.Instructors=instructordata);
  }

  viewEmployee(employee: any) {
    this.getemployees();
    this.showEmployeeTable = true;
    this.selectedEmployee = employee;
    this.showManagerTable = false;
    // this.isModalVisible = true;
  }

  viewInstructor() {
    this.getInstructors();
    this.showEmployeeTable = false;
    this.showManagerTable = false;
    this.showInstructorTable = true;
  }

  viewManager() {
    this.getManagers();
    this.showEmployeeTable = false;
    this.showInstructorTable = false;
    this.showManagerTable = true;
    
  }


  viewModelForm(emp:any){
    this.isModalVisible = true;
    this.selectedEmployee = emp;
  }
  
  // Close the modal
  // closeModal() {
  //   this.isModalVisible = false;
  // }
  
  @Input() selectedEmployee: any = this.employees;  // Employee data passed into the modal
  isModalVisible: boolean = false;
  
  // Method to open the modal
  openModal() {
    this.isModalVisible = true;
  }
  
  // Method to close the modal
  closeModal() {
    this.isModalVisible = false;
  }
  
  // Method to save the edited employee details
  saveEmployee() {
    // You can implement logic here to save the employee data
    console.log('Employee saved', this.selectedEmployee);
    this.closeModal();
  }

}
