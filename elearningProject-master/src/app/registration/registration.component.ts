import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Employee } from '../Employee.class';
import { RegistrationService } from '../registration.service';
import { manager } from '../Manager.class';
import { Instructor } from '../Instructor.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm:FormGroup;
  role: string="";
  
constructor(private registartionService:RegistrationService,private route:Router){
  this.registrationForm=new FormGroup({
    // ,Validators.minLength(5),Validators.maxLength(25)
    employeename:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z\\s]+$")]),
    employeecontact:new FormControl("",[Validators.required,Validators.pattern('^[6-9][0-9]{9}$'),this.noRepeatedDigitsValidator()]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$")]),
    role:new FormControl("",[Validators.required])
   
  })
}
   
noRepeatedDigitsValidator(): ValidatorFn {  
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && value.length === 10) {
      // Check if all digits are the same
      const isRepeated = new Set(value.split('')).size === 1;
      return isRepeated ? { repeatedDigits: true } : null;
    }
    return null;
  };
}

send(){
  this.role=this.registrationForm.controls['role'].value;
    if(this.role.localeCompare("Employee")===0){
      let employee:Employee={
        employeeName: this.registrationForm.controls['employeename'].value,
        employeeContact: this.registrationForm.controls['employeecontact'].value,
        userRef: {
          userId:0,
          email: this.registrationForm.controls['email'].value,
          password: this.registrationForm.controls['password'].value,
          role: this.role
        },
        employeeId: 0,
      }
        this.registartionService.postEmployee(employee).subscribe(
          (p)=>{
          employee=p;
          if(p.employeeId){
            this.route.navigate(['login']);
          }
      });
    }else if(this.role.localeCompare("Manager")===0){
      let manager:manager={
        managerId:0,
        managername:this.registrationForm.controls['employeename'].value,
        managerContact:this.registrationForm.controls['employeecontact'].value,
        userRef: {
          userId:0,
          email: this.registrationForm.controls['email'].value,
          password: this.registrationForm.controls['password'].value,
          role:this.role
        }
      }
      this.registartionService.postManager(manager).subscribe((p)=>{
        manager=p;
        if(p.managerId){
          this.route.navigate(['login']);
        }
      });
    }else{
      let instructor:Instructor={
        instructorId:0,
        instructorName:this.registrationForm.controls['employeename'].value,
        instructorContact:this.registrationForm.controls['employeecontact'].value,
        userRef: {
          userId:0,
          email: this.registrationForm.controls['email'].value,
          password: this.registrationForm.controls['password'].value,
          role:this.role
        }
        
      }
      this.registartionService.postInstructor(instructor).subscribe((p)=>{
        instructor=p;
        if(p.instructorId){
          this.route.navigate(['login']);
        }
      });
    }
}
   

  

  

  




}
