import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['abelardo.felipe@galileo.edu', [Validators.required, Validators.email]],
      password: ['123456789', [Validators.required, Validators.minLength(5)]]
    });
  }

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  login() {
    console.log("Login...", this.credentials.value);
    //this.authService.login();
  }

  register() {
    console.log("Registrarme");
  }

}
