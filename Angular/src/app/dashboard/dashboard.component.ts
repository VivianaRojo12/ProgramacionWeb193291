import { supportsScrollBehavior } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {AuthServiceService} from '../service/auth/auth-service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {EditComponent} from '../edit/edit.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  displayedColumns : String[] = ['fullName','age', 'email', 'update', 'delete'];


  request = [];
  constructor(private serviceService : ServiceService, private authServiceService : AuthServiceService, private _router: Router, private _mat_dialog : MatDialog ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUser(id : number){
    this.authServiceService.getUser(id).subscribe((request : any[])=>{
      this.request = request;
    })
  }

  getUsers(){
    this.authServiceService.getUsers().subscribe((request : any[])=>{
      this.request = request;
    })
  }

  delete(id : number){
      this.authServiceService.deleteUser(id).subscribe((request : any[])=>{
      this.request = request;
      this.getUsers();
    })
  }

  agregar(){
    this._router.navigate(['add']);
  }

 update(user : []){
    const dialog = this._mat_dialog.open(EditComponent, {data : user});
    dialog.afterClosed().subscribe(equis =>{
    this.getUsers();
   })

  }
}
