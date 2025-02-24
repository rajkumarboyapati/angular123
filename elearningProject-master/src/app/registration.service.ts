import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebUrl } from './api.class';
import { Employee } from './Employee.class';
import { endpoints } from './endpoints.class';
import { Observable } from 'rxjs';
import { manager } from './Manager.class';
import { Instructor } from './Instructor.class';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  url=WebUrl.base_url;
  addemployee=endpoints.addemployee;
  addmanager=endpoints.addmanager;
  addinstructor=endpoints.addinstructor;
  validate=endpoints.validateuser;

  postEmployee(Employee:Employee):Observable<any>{
    return this.http.post(this.url + this.addemployee, Employee);
  }

  postManager(manager:manager):Observable<any>{
    return this.http.post(this.url+this.addmanager,manager);
  }

  postInstructor(instructor:Instructor):Observable<any>{
    return this.http.post(this.url+this.addinstructor,instructor);
  }

  validateUser(username:string,password:string):Observable<any>{
    return this.http.get<any>(this.url+this.validate+"/"+username+"/"+password);
  }


}
