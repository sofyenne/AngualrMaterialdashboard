import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  activeLink = "";
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  navigate(link : string){
    this.router.navigateByUrl(`role`)
    this.activeLink = link 
  }
}
