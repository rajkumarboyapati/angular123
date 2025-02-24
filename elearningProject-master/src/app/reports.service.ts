import { Injectable } from '@angular/core';
import { WebUrl } from './api.class';
import { endpoints } from './endpoints.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  url=WebUrl.base_url;
  reportsmanagerByid:string=endpoints.reportsByManager;

  constructor(private http:HttpClient) { }

  getReportsForManager(managerId:number):Observable<any>{
    return this.http.get<any>(this.url + this.reportsmanagerByid + "/" + managerId);
  }

  




}
