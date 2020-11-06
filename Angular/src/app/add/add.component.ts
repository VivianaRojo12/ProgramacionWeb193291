import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthServiceService} from '../service/auth/auth-service.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addFormGroup : FormGroup;
  constructor(private _formBuilder: FormBuilder, private _authServiceService : AuthServiceService, private _router: Router) {

   }

  ngOnInit(): void {
    this.addFormGroup = this._formBuilder.group({
      fullName : ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  post(){
    const post = this.addFormGroup.value;
    this._authServiceService.postUser(post.fullName, post.age, post.email).subscribe(access => {
    console.log(access);
      if(access != null){
        this._router.navigate(['dashboard']);
      }
    });
  }

  regresar(){
    this._router.navigate(['dashboard']);
  }

}
