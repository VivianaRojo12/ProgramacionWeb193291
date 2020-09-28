import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-order-up',
  templateUrl: './order-up.component.html',
  styleUrls: ['./order-up.component.css']
})


export class OrderUpComponent implements OnInit {

  orders = [];

  constructor(private serviceService : ServiceService) { }

  ngOnInit(): void {
    
    this.serviceService.getOrder("orders/").subscribe((data : any[]) => {
      console.log(data);
      this.orders = data;
    });
  }

}
