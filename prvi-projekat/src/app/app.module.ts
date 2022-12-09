import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MeniComponent } from './meni/meni.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { GrupeComponent } from './grupe/grupe.component';

@NgModule({
  declarations: [
    AppComponent,
    MeniComponent,
    AboutUsComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    FrontPageComponent,
    GrupeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}

