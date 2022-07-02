import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient, private route : Router) { }
  async createRole(role : any):Promise<any>{
    let  res = await this.http.post(`${environment.baseUrl}/role/create` ,role ).toPromise()
    return res ;
  }

  async createService(service : any):Promise<any>{
    let  res = await this.http.post(`${environment.baseUrl}/service/create` ,service ).toPromise()
    return res ;
  }

  async createDirection(direction : any):Promise<any>{
    let  res = await this.http.post(`${environment.baseUrl}/direction/create` ,direction ).toPromise()
    return res ;
  }
  async getallrole():Promise<any>{
    let  res = await this.http.get(`${environment.baseUrl}/role/all` ).toPromise()
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

  async updateRole(role : any , id : any):Promise<any>{
    return await this.http.put(`${environment.baseUrl}/role/${id}`, role ).toPromise()
  }
  async updateService(service : any , id :any):Promise<any>{
    return await this.http.put(`${environment.baseUrl}/service/update/${id}`, service ).toPromise()
  }
  async updatedirection(direction : any, id : any):Promise<any>{
    return await this.http.put(`${environment.baseUrl}/direction/update/${id}`, direction ).toPromise()
  }

  async deleterole(id :any):Promise<any>{
    return await this.http.delete(`${environment.baseUrl}/role/${id}`).toPromise()
  }
  async deleteservice(id :any):Promise<any>{
    return await this.http.delete(`${environment.baseUrl}/service/delete/${id}`).toPromise()
  }
  async deletedirection(id :any):Promise<any>{
    return await this.http.delete(`${environment.baseUrl}/direction/delete/${id}`).toPromise()
  }
  async getRoleByid(id :any):Promise<any>{
    return await this.http.get(`${environment.baseUrl}/role/${id}`).toPromise()
  }
  async getserviceByid(id :any):Promise<any>{
    return await this.http.get(`${environment.baseUrl}/service/${id}`).toPromise()
  }
  async getDirectionById(id :any):Promise<any>{
    return await this.http.get(`${environment.baseUrl}/direction/${id}`).toPromise()
  }

}
