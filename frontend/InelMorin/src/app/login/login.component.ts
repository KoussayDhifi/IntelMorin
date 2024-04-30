import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email:string = '';
  public password:string = '';
  public msg:string = '';
  constructor(private lserv:LoginService, private router:Router) {}


  login () {
    let obj = {
      email:this.email,
      password:this.password
    }

    this.lserv.login(obj).subscribe (
      (data:any) => {
        console.log(data);
        if (data.token){
        sessionStorage.setItem('jwtToken',data.token);
        this.router.navigate(['']);
        }else {
          this.msg = data.msg;
        }
      }, (err:any) => {
        console.log(err);
        this.msg = err.msg;
      }
    )

  }

}
