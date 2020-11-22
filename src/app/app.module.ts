import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Rutas
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

//Servicios
  

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';  


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],   
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule   

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
