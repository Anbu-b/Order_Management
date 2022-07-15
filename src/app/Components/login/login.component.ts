import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/Authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username:string='';
  Password:string='';
  show_button: Boolean = false;
  show_eye: Boolean = false;
  showicon:boolean=false;
  constructor(public route:Router,public authservice:AuthService) { }

  ngOnInit(): void {
  }
  login(){
  if(this.Username=='NAVTECH' && this.Password=='Welcome@01'){
    this.authservice.isUserAuthenticated();
    this.authservice.allowroute=true;
    this.route.navigate(['/Home']);
  }
     

  }
  passvalue(res: any) {
    if (res.length == 0) {
      this.showicon = false
    }
    else {
      this.showicon = true
    }
  }
}
