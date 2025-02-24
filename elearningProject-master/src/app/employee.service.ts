import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from './endpoints.class';
import { WebUrl } from './api.class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string=WebUrl.base_url;
  allEmployees:string=endpoints.allEmployees;
  employeesByTeam:string=endpoints.employeesByTeamId;
  employeeByuserUrl:string=endpoints.employeeByuser;
  employeeCourseAssignedurl:string=endpoints.employeeCourseAssigned;

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<any>{
    return this.http.get<any>(this.url+this.allEmployees);
  }

  getemployeesByTeam(teamId:number):Observable<any>{
    return this.http.get<any>(this.url+this.employeesByTeam+"/"+teamId);
  }

  getEmployeeByUser(userId: number): Observable<any> {
    const url = `${this.url}${this.employeeByuserUrl}/${userId}`;
    console.log('Calling API with URL:', url);  // Log the constructed URL
  
    return this.http.get<any>(url);
  }

  CourseAssignedToEmployee(courseId: number, employeeId: number): Observable<any> {
    const url = `${this.url}${this.employeeCourseAssignedurl}/${courseId}/${employeeId}`;
    console.log('Request URL:', url);  // Log the correct URL before calling
    
    // Call the HTTP GET request and return the observable
    return this.http.get<any>(url);
  }
}
