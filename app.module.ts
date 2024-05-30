import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactFormComponent,
  ],

  imports: [
    AuthModule.forRoot({
      domain: 'dev-vgnhn0qw3xj3wx2g.us.auth0.com',
      clientId: 'Cqre1UtCykeRVG5LIgwUMjipDAZukBX3',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
