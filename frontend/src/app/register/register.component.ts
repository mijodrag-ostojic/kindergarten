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
    pol: '',
    email : '',
    lozinka : '',
    lozinka2 : '',
    cookies: [
      { name: 'Item 1', selected: false },
      { name: 'Item 2', selected: true },
      { name: 'Item 3', selected: false },
    ]
  }

  polovi = [
    'male' , 
    'female',
    'other',
  ]

  cookies = [
    { name: 'Item 1', selected: false },
    { name: 'Item 2', selected: true },
    { name: 'Item 3', selected: false },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  print() {
    console.log('Korisnik se registrovao!');
    console.log(this.model);
  }

}
