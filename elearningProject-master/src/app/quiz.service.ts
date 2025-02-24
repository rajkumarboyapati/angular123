import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from './endpoints.class';
import { WebUrl } from './api.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url=WebUrl.base_url;
  quitions:string=endpoints.quitionsList;
  reportsUrl:string=endpoints.reports;

  constructor(private http:HttpClient) { }



  getQuiz(quizId:number):Observable<any>{
    return this.http.get<any>(this.url+this.quitions+"/"+quizId);
  }

  getAnswers(selectedOptions:string[],quizId:number,employeeId:number,courseId:number):Observable<any>{
    const options = selectedOptions.join(',');

  // Construct the URL with the path parameters
    const url = `${this.url}/${this.reportsUrl}/${options}/${quizId}/${employeeId}/${courseId}`;
    return this.http.post(url, {});
  }

}
