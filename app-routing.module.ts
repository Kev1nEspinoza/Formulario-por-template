import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard} from '@auth0/auth0-angular';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  {path :'home', component:HomeComponent},
  {path :'navbar',component : NavbarComponent},
  {path : 'contact-form', component : ContactFormComponent},
  {path : '**', pathMatch : 'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
