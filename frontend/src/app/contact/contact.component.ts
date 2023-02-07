import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';
;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
 
})
export class ContactComponent implements OnInit {

 
  opcije= ['Musko', 'Zensko', 'Ostalo']

 
  model = {
    name : '' , 
    email : '' ,
    number : '',
    message : '' ,
    opcije : '',
  }

  constructor() { }
  
  ngOnInit(): void {
  }
 print() {
    console.log(this.model) 
}
}
