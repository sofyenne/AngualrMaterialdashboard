import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private route : Router) { }
  async createUser(user : any):Promise<any>{
    let  res = await this.http.post(`${environment.baseUrl}/users/create` ,user ).toPromise()
    return res ;
  }

  
  async getallUser():Promise<any>{
    let  res = await this.http.get(`${environment.baseUrl}/users/all` ).toPromise()
    return res ;
  }
  async getallservice():Promise<any>{
    let  res = await this.http.get(`${environment.baseUrl}/service/all` ).toPromise()
    return res ;
  }
  async getalldirection():Promise<any>{
    let  res = await this.http.get(`${environment.baseUrl}/direction/all` ).toPromise()
    return res ;
  }

  async updateUser(user : any , id : any):Promise<any>{
    return await this.http.put(`${environment.baseUrl}/users/${id}`, user ).toPromise()
  }
  async activeUser( id : any):Promise<any>{
    return await this.http.put(`${environment.baseUrl}/users/active/${id}`,{} ).toPromise()
  }
 
  async deleuser(id :any):Promise<any>{
    return await this.http.delete(`${environment.baseUrl}/users/${id}`).toPromise()
  }
  async getUserbyId(id : any):Promise<any>{
    return await this.http.get(`${environment.baseUrl}/users/${id}`).toPromise()
  }
  

}
