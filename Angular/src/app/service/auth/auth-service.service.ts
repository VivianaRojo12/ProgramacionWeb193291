import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  api: String = 'https://backendpw.herokuapp.com/';
  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user['token'] ? true : false; // Pendiente token
    } else {
      return false;
    }
  }

  login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(`${this.api}api/v1/login/`, { username, password }, httpOptions);
  }

  getUsers() {
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${user['token']}`
      })
    }
    return this.http.get(`${this.api}api/v1/profile/profileModel_users`, httpOptions);
  }

  getUser(id : number) {
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${user['token']}`
      })
    }
    return this.http.get(`${this.api}api/v1/profile/profileModel_userID/${id}`, httpOptions);
  }

  deleteUser(id : number) {
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${user['token']}`
      })
    }
    return this.http.delete(`${this.api}api/v1/profile/profileModel_userID/${id}`, httpOptions);
  }

  putUser(id : number, fullName:string, age:number, email:string) {
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${user['token']}`
      })
    }
    return this.http.put(`${this.api}api/v1/profile/profileModel_userID/${id}`,{fullName, age, email}, httpOptions);
  }

  postUser(fullName:string, age:number, email:string) {
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${user['token']}`
      })
    }
    return this.http.post(`${this.api}api/v1/profile/profileModel_users`,{fullName, age, email}, httpOptions);
  }

  

}
