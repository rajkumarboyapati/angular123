import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Support } from './Support';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
url:string="http://localhost:8084/support"

  constructor(private http:HttpClient) { }
  getAllsupportBy():Observable<any>{
 return this.http.get<any>(this.url+"/"+"getallsupports");
  }
  getSupportById(supportId:number):Observable<any>{
    return this.http.get<any>(this.url+"/"+"getsupport/"+supportId);

  }
  addsupport(support:Support):Observable<any>{
return this.http.post(this.url+"/addsupport",support);
  }

}
