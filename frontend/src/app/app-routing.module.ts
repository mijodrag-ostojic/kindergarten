import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { GrupeComponent } from './grupe/grupe.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'front-page', component: FrontPageComponent}, 
  {path: 'contact', component: ContactComponent},
  {path: 'grupe', component: GrupeComponent},
  { path: '', redirectTo: '/about-us', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
