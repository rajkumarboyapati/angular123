import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../User.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user :User=new User();
  loginform:FormGroup;
  username="";
  password="";
  errormessage=true;
  id:string;

  constructor(private service:RegistrationService,private route:Router){
    this.loginform=new FormGroup({
      username:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required])
    })
  }

  validate(){
    this.username=this.loginform.controls['username'].value;
    this.password=this.loginform.controls['password'].value;
    alert(this.username+this.password);
    this.service.validateUser(this.username, this.password).subscribe(
      (userobject) => {
        // Assuming userobject contains a 'user' object and you want to get a field from it
        console.log('User object received:', userobject);
        if(userobject.role.localeCompare("Employee")===0){
          // this.route.navigate(['employeedash']);
          this.route.navigate(['/employeedash',userobject.userId])
        }else if(userobject.role.localeCompare("Manager")===0){
          sessionStorage.setItem("userId",userobject.userId.toString());
          this.route.navigate(['managerdash'])
        }else if(userobject.role.localeCompare("Instructor")===0){
          this.route.navigate(['instructordash'])
          this.id=userobject.userId;
          sessionStorage.setItem("userId",userobject.userId.toString());
        }else if(userobject.role.localeCompare("Admin")===0){
          this.route.navigate(['admindash'])
        }else{
          this.errormessage=false;
        }
      },
      (error) => {
        console.log('Error validating user:', error);
      }
    );
  }
  // setuserobject(user:User){
  //   this.user=user;
  //   console.log(this.user);
  // }
  

}
