import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private RES_API_SERVER = "http://localhost:3306/"

  constructor(private httpClient : HttpClient ) { }

  public getProduct(nameEndPoint : String){
    return this.httpClient.get(this.RES_API_SERVER + nameEndPoint);
  }

  public getOrder(nameEndPoint : String){
    return this.httpClient.get(this.RES_API_SERVER + nameEndPoint);
  }

  public getUser(nameEndPoint : String){
    return this.httpClient.get(this.RES_API_SERVER + nameEndPoint);
  }

  public getSale(nameEndPoint : String){
    return this.httpClient.get(this.RES_API_SERVER + nameEndPoint);
  }

}
