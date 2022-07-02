import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'direction-modal',
  templateUrl: './direction-modal.component.html',
  styleUrls: ['./direction-modal.component.css']
})
export class DirectionModalComponent implements OnInit {

  constructor(
    @Optional() public dialogRef: MatDialogRef<DirectionModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
   ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
