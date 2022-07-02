import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Role } from 'app/Models/Role';
import { SettingsService } from 'app/services/settings.service';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { RoleModalComponent } from './role-modal/role-modal.component';

@Component({
  selector: 'role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  role : Role 
  listrole : Role[]
  constructor(private roleService:SettingsService ,private router: Router , private toast:ToastrService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getallRole();
  }
  openModal(){
    const dialogRef = this.dialog.open(RoleModalComponent, {
      width: '350px',
      data: {title:'create Role', role: new Role()},
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result){this.createRole(result)}
      
    });
  }



    openModalEdit(role:Role ){
      
    const dialogRef = this.dialog.open(RoleModalComponent, {
      width: '350px',
      data: {title:'create Role', role: {...role}},
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.updateRole(result , result.id)
      }

   
    });
  }
  createRole(role :Role){
    this.roleService.createRole(role).then((res)=>{
      this.listrole.push(res)
      this.toast.success("role created")
    })
    .catch((err:Error)=>{
      console.log(err);
      this.toast.error("error when create role ")
    })
  }
  getallRole(){
    this.roleService.getallrole().then(res =>{
      console.log(res)
      this.listrole = res ;
    }).catch(err=>console.log(err))
  }
  getRoleById(id){
    this.roleService.getRoleByid(id)
  }
  removeRole(id){
    this.roleService.deleterole(id).then(res =>{
   this.listrole = this.listrole.filter(e =>e.id != id)
     this.toast.info("role deleted")
    }).catch(err=>{console.log(err)
    this.toast.error("error when delete role ")})
  }
  updateRole(role :Role , id : any){
    this.roleService.updateRole(role , id ).then((res)=>{
      this.listrole = this.listrole.filter(element => element.id !== id);
      this.listrole.push(res)
      this.toast.success('role updated')    })
  .catch(err=>{
    this.toast.error(err)
    console.log(err)})
  }
  }


