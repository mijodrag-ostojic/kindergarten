import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  hide !: boolean

  opcije = []


  ime !: string

  prezime !: string
  korisnickoIme !: string
  email !: string
  datumRodjenja !: string



  constructor(public router: Router) {
    console.log('konstruktor');
  }

  ngOnInit(): void {
    console.log('init');
  }




}
