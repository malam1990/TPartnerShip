import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator/app.floatingconfigurator';
import { CompanydetailsService } from '../../service/companydetails.service';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

   constructor(private auth: AuthService, private router: Router){}
    email: string = '';
    password: string = '';

   

    login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
     console.log('JWT Token:', res.token)
        this.router.navigate(['/dashboard']);
      },
       error: (err) => {
           console.error('Invalid login', err);
      
    }
    });
  }
   
}
 