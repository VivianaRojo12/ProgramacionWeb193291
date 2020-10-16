import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  dataSource = [];
  displayedColumns : String[] = ['id','name', 'price'];

  constructor(private serviceService : ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getProduct("products/").subscribe((data : any[]) => {
      console.log(data);
      this.dataSource = data;
    });
  }

}
