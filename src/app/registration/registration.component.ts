import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signUpForm! : FormGroup

  ngOnInit(): void {
     this.createRegistrationForm()
  }
constructor(private SignBuild:FormBuilder,private Http:ServiceService){

}
  createRegistrationForm(){
    this.signUpForm = this.SignBuild.group({
      "user_name":this.SignBuild.control('',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("[a-zA-Z]{2,10}")]),
       "user_email":this.SignBuild.control('',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
       "user_phone_no":this.SignBuild.control('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
       "user_pwd":this.SignBuild.control('',[Validators.required]),
       "user_gender":this.SignBuild.control('',[Validators.required,]), 
      
     })
 }

 save(){
  console.log("form data",this.signUpForm.value);
}

 get user_name(){
    this.signUpForm.get('user_name');
   return this.signUpForm.controls['user_name'];
 }

 get user_email(){
  this.signUpForm.get('user_email');
     return this.signUpForm.controls['user_email'];
   }
   
 get user_phone_no(){
  this.signUpForm.get('user_phone_no');
   return this.signUpForm.controls['user_phone_no'];
 }

 get user_gender(){
  this.signUpForm.get('user_gender');
   return this.signUpForm.controls['user_gender'];
 }

 get user_pwd(){
  // this.signUpForm.get('user_pwd');
  return this.signUpForm.controls['user_pwd'];
}
  
}

