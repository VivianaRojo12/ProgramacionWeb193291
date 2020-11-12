import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthServiceService} from '../service/auth/auth-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router,  private _authServiceService: AuthServiceService) {

  }

  ngOnInit(): void {
    this.registerFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required]
      
    })
  }

  register(): void {
    const data = this.registerFormGroup.value;
    if (data.username && data.email && data.password1 && data.password2) {
      this._authServiceService.register(data.username, data.email, data.password1, data.password2).subscribe(access => {
      this._router.navigate(['login'])
      }, error => {
        console.log("Hola")
      }
      );
    }
  }

}
