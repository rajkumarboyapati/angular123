import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebUrl } from './api.class';
import { endpoints } from './endpoints.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private url:string=WebUrl.base_url;
  private getmanager=endpoints.getmanagers;
  private getteamsurl=endpoints.getTeamsByUser;
  private getManagerIdUrl=endpoints.getManagerId;
  private assignCourseUrl=endpoints.assignCourse;

  constructor(private http:HttpClient) { }

  getAllManagers():Observable<any>{
    return this.http.get<any>(this.url+this.getmanager);
  }

  getTeamsByUser(userId:number):Observable<any>{
    return this.http.get<any>(this.url+this.getteamsurl+"/"+userId);
  }

  getManagerIdByUserId(userId:number):Observable<any>{
    return this.http.get<any>(this.url+this.getManagerIdUrl+"/"+userId);
  }

  assignCourseByManager(employeeId: number, managerId: number, courseId: number): Observable<any> {
    return this.http.post(
        `${this.url}${this.assignCourseUrl}/${employeeId}/${managerId}/${courseId}`, 
        {} // or you can pass null if there's no body content
    );
}


}
