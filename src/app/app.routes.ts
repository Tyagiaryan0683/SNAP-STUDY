import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsHeaderComponent } from './Components/contact-us-header/contact-us-header.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { SignUpPageComponent } from './Components/sign-up-page/sign-up-page.component';
import { SemesterPageComponent } from './Components/semester-page/semester-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'Home',component:HomeComponent},
    {path:'Courses',component:CoursesComponent},
    {path:'Contact_us',component:ContactUsComponent},
    {path:'About_us',component:AboutUsComponent},
    {path:'Header',component:ContactUsHeaderComponent},
    {path:'Footer',component:FooterComponent},
    {path:'Login-page',component:LoginPageComponent},
    {path:'Signup-page',component:SignUpPageComponent},
    {path:'Semester-page',component:SemesterPageComponent},
    {path:'Error-page',component:ErrorPageComponent},


    { path: '**', component: ErrorPageComponent }

    // { path: '**', redirectTo: 'ErrorPageComponent', pathMatch: 'full' }
];
