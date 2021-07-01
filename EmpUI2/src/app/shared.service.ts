import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:62922/api";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http:HttpClient) { }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee/GetEmplist')
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee/CreateEmployee', val)
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee/UpdateEmployee', val)
  }

  deleteEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee/DeleteEmployee', val)
  }

  getSalaryEmpList(Id:string): Observable<any> {
    return this.http.post<any>(this.APIUrl + '/Employee/GetSalary', Id, this.httpOptions);
  }

  updateSalary(val:any){
    return this.http.post(this.APIUrl+'/Employee/UpdateSalary', val)
  }
}
