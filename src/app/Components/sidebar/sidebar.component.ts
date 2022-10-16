import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  
  constructor(private route:ActivatedRoute) { 
    console.log(route)
  }
  
  ngOnInit(): void {
  }

}
