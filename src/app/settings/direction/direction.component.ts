
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Direction } from 'app/Models/Direction';

import { SettingsService } from 'app/services/settings.service';
import { ToastrService } from 'ngx-toastr';
import { DirectionModalComponent } from './direction-modal/direction-modal.component';

@Component({
  selector: 'direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  direction : Direction 
  directionList : Direction[]
  constructor(private directionService:SettingsService ,private router: Router , private toast:ToastrService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getalldirection();
  }
  openModal(){
    const dialogRef = this.dialog.open(DirectionModalComponent, {
      width: '350px',
      data: {title:'create direction', direction : new Direction()},
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result){this.createdirection(result)}
      
    });
  }



    openModalEdit(direction:Direction ){
      
    const dialogRef = this.dialog.open(DirectionModalComponent, {
      width: '350px',
      data: {title:'create direction', direction: {...direction}},
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.updatedirection(result , result.directionId)
      }

   
    });
  }
  createdirection(direction :Direction){
    this.directionService.createDirection(direction).then((res)=>{
      this.directionList.push(res)
      this.toast.success("direction created")
    })
    .catch((err:Error)=>{
      console.log(err);
      this.toast.error("error when create direction ")
    })
  }
  getalldirection(){
    this.directionService.getalldirection().then(res =>{
      console.log(res)
      this.directionList = res ;
    }).catch(err=>console.log(err))
  }
  getdirectionById(id){
    this.directionService.getDirectionById(id)
  }
  removedirection(id){
    this.directionService.deletedirection(id).then(res =>{
   this.directionList = this.directionList.filter(e =>e.directionId != id)
   this.toast.success('direction deleted')
    }).catch(err=>{
      this.toast.error(err.message)
      console.log(err)})
  }
  updatedirection(direction :Direction , id : any){
    this.directionService.updatedirection(direction , id ).then((res)=>{
      this.directionList = this.directionList.filter(element => element.directionId !== id);
      this.directionList.push(res)
      this.toast.success('direction updated')
    })
  .catch(err=>{
    this.toast.error('error when delete direction')
    console.log(err)})
  }
}
