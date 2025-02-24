import { Injectable } from '@angular/core';
import { WebUrl } from './api.class';
import { endpoints } from './endpoints.class';
import { Observable } from 'rxjs';
import { HtmlParser } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Course } from './Course.class';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  

  private url:string=WebUrl.base_url;
  private getinstructor=endpoints.getinstructior;
  private getCourseByInstructorName=endpoints.getCoursesByInstructorName;
  userurl:string='http://localhost:8084/instructor/getinstructorbyiduserId';
  courseurl:string='http://localhost:8084/course/getallcoursesbyinstructor';
  reportsurl:string='http://localhost:8084/reports/getreportsbyinstructorid';

  private addInstructor=endpoints.addCourse;
  constructor(private http:HttpClient) { }

  getAllInstructor():Observable<any>{
    return this.http.get<any>(this.url+this.getinstructor);
  }
  getInstructorByUserId(userId:number):Observable<any>{
    return this.http.get<any>(this.userurl+"/"+userId);
  }
   addCourse(course:Course):Observable<any>{
    return this.http.post<any>(this.url+this.addCourse,course,{responseType:"json"});
   }
   getCoursesByInstructorName(userName:string):Observable<any>{
    return this.http.get<any>(this.courseurl+"/"+userName);
   }
   getReportsByInstructorId(instrcutorId:number):Observable<any>{
    return this.http.get<any>(this.reportsurl+"/"+instrcutorId);
   }
}
