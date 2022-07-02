import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AutheticationService } from 'app/services/authetication.service';
import { UserService } from 'app/services/userService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginform : FormGroup
    constructor( private formBuilder: FormBuilder ,private useerService : UserService ,private toastr: ToastrService ,private loginService : AutheticationService , private router : Router) { }
  
    ngOnInit(): void {
      this.loginform = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', Validators.required]
    });
    }
  
    login(){

     this.loginService.login(this.loginform.value).subscribe(res =>{
       localStorage.setItem('userInfo',JSON.stringify(res));
       this.router.navigate(['dashboard']);
       this.toastr.success('authentication success')
       this.useerService.getUserbyId(res.userId).then(res =>localStorage.setItem('currentRole',JSON.stringify(res.role.role)) )
      
     }, (err)=>{;
      this.toastr.error(err.error.message)
    })
  
  }

}

