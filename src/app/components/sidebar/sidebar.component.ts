import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role :string []
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '',role :['admin' , 'user'] },
    
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' ,role :['admin'] },

    { path: '/settings', title: 'Settings',  icon:'bubble_chart', class: '',role :["admin"] },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    let currentRole = JSON.parse(localStorage.getItem('currentRole' || ''))
    this.menuItems = ROUTES.filter(menuItem => menuItem.role.includes(currentRole));
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
