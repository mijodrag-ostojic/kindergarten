import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { GrupeComponent } from './grupe/grupe.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { IzletiComponent } from './izleti/izleti.component';
import { RadioniceComponent } from './radionice/radionice.component';
import { ZaMalceComponent } from './za-malce/za-malce.component';
import { ZaSkolarceComponent } from './za-skolarce/za-skolarce.component';
import { ZaPredskolceComponent } from './za-predskolce/za-predskolce.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'front-page', component: FrontPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'grupe', component: GrupeComponent },
  { path: 'galerija', component: GalerijaComponent },
  { path: 'izleti', component: IzletiComponent },
  { path: 'radionice', component: RadioniceComponent },
  { path: 'za-malce', component: ZaMalceComponent },
  { path: 'za-skolarce', component: ZaSkolarceComponent },
  { path: 'za-predskolce', component: ZaPredskolceComponent },
  { path: '', redirectTo: '/about-us', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
