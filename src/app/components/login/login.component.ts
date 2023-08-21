import { Component } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public users!: User[]; 

  constructor(private userService: UserService,private router: Router, private authenticationService:AuthenticationService) {}

  // This component is going to run, however, it needs to be initialized first.
  // So, I will put my function here.
  ngOnInit(): void {
  }

  public onFindUser(findForm: NgForm): void {
    document.getElementById('find-user-form')?.click();
    this.userService.findByUsernamePassword(findForm.value).subscribe(
      (response: User) => {
        console.log(response);
        if(response != null){
          this.authenticationService.login();
          this.router.navigate(['/courses']);
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

}
