import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollDown() {
    document.getElementById("section2").scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
