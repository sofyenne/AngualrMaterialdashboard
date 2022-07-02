import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Role } from 'app/Models/Role';

@Component({
  selector: 'role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.css']
})
export class RoleModalComponent implements OnInit {
  
  constructor(
    @Optional() public dialogRef: MatDialogRef<RoleModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
   ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
