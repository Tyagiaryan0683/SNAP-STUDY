import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.maxLength(6)])
  });

  onSubmit() {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
    } 
    }
  

}
