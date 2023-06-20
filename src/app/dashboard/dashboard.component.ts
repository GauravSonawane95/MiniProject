import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList:User[] = [] ;

  constructor(private http:ServiceService){

  }

 ngOnInit(): void {
    this.getUserList();
 }

 getUserList() {
 
 this.http.DashData().subscribe(() => {
     
   },
     () => {

     })
 }
}

export interface User{
  user_id:number
user_name:string
user_email:string
user_phone_no:string
user_pwd:string
user_gender:string
}