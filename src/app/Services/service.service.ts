import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
baseURL:string="https://devrunner.co.in/machine_test/index.php/web_api/Users/";
  constructor(private Http:HttpClient) { }

  getData(endPoint:string){
    const url=this.baseURL+endPoint;
    return this.Http.get(url);

  };
  saveData(endPoint:string,body:any){
    const url =this.baseURL+endPoint
    return this.Http.post(url,body)
  };
  updateData(endPoint:string,body:any){
    const url =this.baseURL+endPoint
    return this.Http.put(url,body)
  };
  deleteData(endPoint:string){
    const url =this.baseURL+endPoint
    return this.Http.delete(url)
  };
  DashData(){
    const url=this.baseURL;
    return this.Http.get(url);

  };
}
