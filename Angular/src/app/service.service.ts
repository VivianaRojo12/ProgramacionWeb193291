import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'
import { from } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private RES_API_SERVER = "http://localhost:3000/"

  constructor(private httpclient : HttpClient ) { }

 /*  public getProduct(nameEndPoint: String){
    return this.httpclient.get(this.REST_API_SERVER + nameEndPoint);
  } */

  /* constructor( private angularAuth : AngularFireAuth,  private router : Router) {}
    public getAuthGoogle(){
      this.angularAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.angularAuth.authState.subscribe(user => {if(user != null) {this.router.navigate(['/dashboard'])} });
    } */
}
