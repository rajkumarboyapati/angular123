import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebUrl } from './api.class';
import { endpoints } from './endpoints.class';
import { Course } from './Course.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  url=WebUrl.base_url;
  addcourseUrl:string=endpoints.addCourse;
  getCourses:string=endpoints.getAllCourses;
  getcoursebyidUrl=endpoints.getCourseById;
  private apiUrl = 'http://localhost:8084/course/addCourse1';
  constructor(private http:HttpClient) { }

  addCourse(course:Course):Observable<any>{
    return this.http.post(this.url+this.addcourseUrl,course,{responseType:'json'});
  }

  getAllcourses():Observable<any>{
    return this.http.get<any>(this.url+this.getCourses);
  }

  getCourseById(courseId:number):Observable<any>{
    return this.http.get<any>(this.url+this.getcoursebyidUrl+"/"+courseId);
  }
  addCourse1(course: Course, materialFiles: File[], videoFiles: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('course', new Blob([JSON.stringify(course)], { type: 'application/json' }));

    materialFiles.forEach((file, index) => {
      formData.append('materialFiles', file);
    });

    videoFiles.forEach((file, index) => {
      formData.append('videoFiles', file);
    });

    return this.http.post(this.apiUrl, formData);
  }

  

}
