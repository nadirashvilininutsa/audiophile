import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
