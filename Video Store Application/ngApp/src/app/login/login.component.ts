import { Component, OnInit } from '@angular/core';
import {MyserviceService } from './../myservice.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {

  constructor(private service : MyserviceService , private routes: Router) { }
  msg;

  ngOnInit() {
  }
  check(username: string, password: string){
    var output=this.service.checkusernameandpassword(username, password);
    if(output == true){
      this.routes.navigate(['/shell']);
    }
    else{
      this.msg='*Enter correct username or password';
    }
  }

}
