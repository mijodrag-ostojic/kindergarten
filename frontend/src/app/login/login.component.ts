import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = 'tijana'
  password = 'tpass'

  model = new User(undefined, undefined)
  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log('username');  
  }

  setUsername(username:string){
    this.username = username;
  }

}
