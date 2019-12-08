import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    if(this.navbarOpen === false) {
      this.navbarOpen = true;
    } else if (this.navbarOpen === true) {
      this.navbarOpen = false;
    }
  }



}
