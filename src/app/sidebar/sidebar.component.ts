import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private abc:Router) { }

  ngOnInit(): void {
  }
  linking(){
    this.abc.navigate(['login']);
  }
}
