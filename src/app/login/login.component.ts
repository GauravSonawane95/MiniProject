import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
// import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;
  errormsg = ""
  constructor(private formbuild: FormBuilder, private route: Router, private Http: ServiceService) {

  }

  ngOnInit(): void {
    this.LoginData()
  }

  LoginData() {
    this.LoginForm = this.formbuild.group({
      'user_email': ["", [Validators.required]],
      'user_pwd': ["", [Validators.required]],
    })
  }

  SaveLogin() {

    let endpoint = 'login?' + 'user_email=' + this.LoginForm.get('user_email')?.value + '&' + 'user_pwd=' + this.LoginForm.get('user_pwd')?.value

    this.Http.getData(endpoint).subscribe(

      () => {
        
         {
         
          this.route.navigate(['/Dash'])
        }

      },

      () => {
        alert("Enter Valid Details")
      }
    )
  }

}
