import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { Osoba } from '../osoba';
import { Pol } from '../pol';

@Component({
  selector: 'app-meni',
  templateUrl: './meni.component.html',
  styleUrls: ['./meni.component.css']
})
export class MeniComponent implements OnInit {


  osoba: Osoba | null = null;
  constructor(public router: Router) {
    console.log('konstruktor');
  }

  ngOnInit(): void {
    console.log('init');
  }


  goToLogin() {
    this.router.navigate(['/login'])
  }

  goToAboutUs() {
    this.router.navigate(['/about-us'])
  }
  goToFrontPage() {
    this.router.navigate(['/front-page'])
  }
  goToContact() {
    this.router.navigate(['/contact'])
  }
  goToGrupe() {
    this.router.navigate(['/grupe'])
  }
  goToGalerija() {
    this.router.navigate(['/galerija'])
  }
  goToIzleti() {
    this.router.navigate(['/izleti'])
  }
  goToRadionice() {
    this.router.navigate(['/radionice'])
  }
  goToZaMalce() {
    this.router.navigate(['/za-malce'])
  }
  goToZaSkolarce() {
    this.router.navigate(['/za-skolarce'])
  }
  goToZaPredskolarce() {
    this.router.navigate(['/za-predskolce'])
  }

}
