import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Direction } from 'app/Models/Direction';
import { Service } from 'app/Models/Service';
import { SettingsService } from 'app/services/settings.service';
import { ToastrService } from 'ngx-toastr';
import { ServiceModalComponent } from './service-modal/service-modal.component';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  service : Service 
  serviceList : Service[]
  directionList :Direction[]
  constructor(private serviceService:SettingsService ,private router: Router , private toast:ToastrService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getallservice();
    this.getalldirection();
  }
  openModal(){
    const dialogRef = this.dialog.open(ServiceModalComponent, {
      width: '350px',
      data: {title:'create service', service : new Service() , direction:this.directionList},
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result){this.createservice(result)}
      
    });
  }



    openModalEdit(service:Service ){
      
    const dialogRef = this.dialog.open(ServiceModalComponent, {
      width: '350px',
      data: {title:'edit service', service: {...service} ,direction:this.directionList},
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.updateservice(result , result.serviceId)
      }

   
    });
  }
  getalldirection(){
    this.serviceService.getalldirection().then(res =>{
      console.log(res)
      this.directionList = res ;
    }).catch(err=>console.log(err))
  }
  createservice(service :Service){
    this.serviceService.createService(service).then((res)=>{
      this.serviceList.push(res)
      this.toast.success("service created")
    })
    .catch((err:Error)=>{
      console.log(err);
      this.toast.error("error when create service ")
    })
  }
  getallservice(){
    this.serviceService.getallservice().then(res =>{
      console.log(res)
      this.serviceList = res ;
    }).catch(err=>console.log(err))
  }
  getserviceById(id){
    this.serviceService.getserviceByid(id)
  }
  removeservice(id){
    this.serviceService.deleteservice(id).then(res =>{
   this.serviceList = this.serviceList.filter(e =>e.serviceId != id)
   this.toast.success('service deleted')
    }).catch(err=>
      { this.toast.error('error when delete service')
        console.log(err)})
  }
  updateservice(service :Service , id : any){
    this.serviceService.updateService(service , id ).then((res)=>{
      this.serviceList = this.serviceList.filter(element => element.serviceId !== id);
      this.serviceList.push(res)
      this.toast.success('service updated')
    })
  .catch(err=>
    {this.toast.error('error when update service')
      console.log(err)})
  }

}
