import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ContactUsHeaderComponent } from './Components/contact-us-header/contact-us-header.component';
import { HomeComponent } from './Components/home/home.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterModule,ContactUsHeaderComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SnapStudy';

constructor(private router:Router){}




  goToLogin(){
    this.router.navigate(['/Login-page']);
  }
  goToSignup(){
    this.router.navigate(['/Signup-page']);
  }

  goToSemester(){
    this.router.navigate(['/Signup-page']);
  }

}
