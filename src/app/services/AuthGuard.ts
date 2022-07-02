import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, 
 CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './userService';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   
  constructor(
  
    public router: Router , private toastr : ToastrService , private  userService :UserService
  ) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
     let CurrentRole = JSON.parse(localStorage.getItem('currentRole'||'{}'))
     let role = route.data.Role ;
     let userInfo = JSON.parse(localStorage.getItem('userInfo'||'{}'))
      if (userInfo.jwt !=null ) {
        if( role.includes(CurrentRole)){
          return true
        }
          this.router.navigate(['/dashboard'])
          return false
    } 
 // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { 'redirectURL': state.url } });
    return false;
}
}