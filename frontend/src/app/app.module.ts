import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MeniComponent } from './meni/meni.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { GrupeComponent } from './grupe/grupe.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { ZaPredskolceComponent } from './za-predskolce/za-predskolce.component';
import { ZaMalceComponent } from './za-malce/za-malce.component';
import { ZaSkolarceComponent } from './za-skolarce/za-skolarce.component';
import { RadioniceComponent } from './radionice/radionice.component';
import { IzletiComponent } from './izleti/izleti.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent, 
    MeniComponent,
    AboutUsComponent,
    ContactComponent,
    FrontPageComponent,
    GrupeComponent,
    LoginComponent,
    RegisterComponent,
    ZaPredskolceComponent,
    ZaMalceComponent,
    ZaSkolarceComponent,
    RadioniceComponent,
    IzletiComponent,
    GalerijaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}


