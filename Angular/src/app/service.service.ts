import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private RES_API_SERVER = "http://localhost:3000/"

  constructor(private httpClient : HttpClient ) { }

  public getProduct(nameEndPoint : String){
    return this.httpClient.get(this.RES_API_SERVER + nameEndPoint);
  }
  
}
