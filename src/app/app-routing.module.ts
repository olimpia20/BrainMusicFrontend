import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursComponent } from './components/cours/cours.component';
import { TestsComponent } from './components/tests/tests.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
  },
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"signup",
    component: SignupComponent,
  },
  {
    path:"courses",
    component: CoursesComponent,
  },
  {
    path:"cours",
    component: CoursComponent,
  },
  { path: 'tests', 
    component: TestsComponent, 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
