import { Component } from '@angular/core';
import { Instructor } from '../Instructor.class';
import { Employee } from '../Employee.class';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { manager } from '../Manager.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToSignUp() {
    this.router.navigate(['registration']);
  }
  navigateToSignIn(){
    this.router.navigate(['/login']);

  }

}
