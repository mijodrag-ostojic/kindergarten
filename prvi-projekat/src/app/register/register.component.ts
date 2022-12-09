import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model : Account = {
    ime : '',
    prezime : '',
    datumRodjenja : new Date,
    korisnickoIme : '',
    email : '',
    lozinka : '',
    lozinka2 : '' 
  }

  constructor() { }

  ngOnInit(): void {
  }

  print() {
    console.log('Korisnik se registrovao!');
    console.log(this.model);
  }

}
