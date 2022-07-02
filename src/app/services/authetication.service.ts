import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  constructor(private http: HttpClient, private route : Router) { }
  login(accessparametr : any):Observable<any>{
    return this.http.post(`${environment.authUrl}/authenticate` , accessparametr)
  }
}