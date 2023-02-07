import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : Account = {
    ime: '',
    prezime: '',
    datumRodjenja: new Date,
    korisnickoIme: '',
    email: '',
    lozinka: '',
    lozinka2: '',
    pol: '',
    cookies: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  print() {
    console.log('Korisnik se registrovao!');
    console.log(this.model);
  }

}