import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Direction } from 'app/Models/Direction';
import { Role } from 'app/Models/Role';
import { Service } from 'app/Models/Service';
import { User } from 'app/Models/User';
import { SettingsService } from 'app/services/settings.service';
import { UserService } from 'app/services/userService';
import { ToastrService } from 'ngx-toastr';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private userService : UserService ,private dialog: MatDialog , private settings: SettingsService, private toastr : ToastrService) { }
   userList :any []
   serviceList : Service[]
   roleList:Role[]
   directionList : Direction[]
  ngOnInit() {
    this.getAllUsers()
    this.getaService()
    this.getallDirection()
    this.getallRole()
  }
  getAllUsers(){
    this.userService.getallUser().then(res => {
      this.userList =res ;
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  openModal( ){
      
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '750px',
      data: {title:'create user', user: new User(),service :this.serviceList,direction:this.directionList,role:this.roleList },
    });
    dialogRef.afterClosed().subscribe(result => {
           if(result){this.createUser(result)}
            
   
    });
  }



    openModalEdit(user:User ){
      
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '750px',
      data: {title:'edit user', user: {...user},service :this.serviceList,direction:this.directionList,role:this.roleList },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        delete result.date ;
        this.updateUser(result , user.cin)
        console.log(result)
      }

   
    });
  }
  createUser(user :any){
    this.userService.createUser(user).then(res=>{

      this.userList.push(res)
     
    })
    .catch((err:Error)=>{
      console.log(err);
    })
  }
  getallRole(){
    this.settings.getallrole().then(res =>{
      this.roleList = res ;
    }).catch(err=>console.log(err))
  }
  getaService(){
    this.settings.getallservice().then(res =>{
      this.serviceList = res ;
    }).catch(err=>console.log(err))
  }
  getallDirection(){
    this.settings.getalldirection().then(res =>{
      this.directionList = res ;
    }).catch(err=>console.log(err))
  }

  removeuser(id){
    this.userService.deleuser(id).then(res =>{
   this.userList = this.userList.filter(e =>e.cin != id)
     
    }).catch(err=>console.log(err))
  }
  updateUser(user :User , id : any){
    this.userService.updateUser(user , id ).then((res)=>{
      this.userList = this.userList.filter(element => element.cin !== id);
      this.userList.push(res)
    })
  .catch(err=>console.log(err))
  }

  btnclass(active :boolean){
    return active ? "btn btn-success" : "btn btn-danger"
  }
  btnlabel(active :boolean){
    return active ? "Disactive" : "Active"
  }

  activeUser(id : any){
    let message 
    this.userService.activeUser(id).then(res=>{
      this.userList=this.userList.filter(e => e.cin !== id)
      this.userList.push(res)
     message = res.active? "user activate" : "user disactivated" ;
      this.toastr.success(message)
    }).catch(err => {
      console.log(err)
      this.toastr.error("error when " + message)
    })
  }


  
}
