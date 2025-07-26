import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-sing-up',
  imports: [FormsModule, RouterLink],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {
  email: string = '';
  pass: string = '';
  private authService = inject(AuthService);
  private router = inject(Router)
  signUp(): void {
    this.authService.signUp(this.email, this.pass).then((res) => {
      this.router.navigate(['//auth/sign-in'])
    }).catch((err) => {
      console.log(err);
    })
  }
  validationEmail(): boolean {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return this.email.length != 0 ? !pattern.test(this.email) : false;
  }
  validationPassword(): boolean {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    return this.pass.length != 0 ? !pattern.test(this.pass) : false;
  }
}
