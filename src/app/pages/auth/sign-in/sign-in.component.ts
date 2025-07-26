import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  email: string = '';
  pass: string = '';
  private authService = inject(AuthService)
  router = inject(Router)
  forgerUserOrPass!: boolean;

  signIn(): void {
    this.authService.signIn(this.email, this.pass).then((res) => {
      localStorage.setItem("token", res.user.uid);
      this.router.navigate(['/home'])
      this.forgerUserOrPass = false;
    }).catch((err) => {
      this.forgerUserOrPass = true;
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
