import { Component } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public users!: User[]; 

  constructor(private userService: UserService,private router: Router) {}

  // This component is going to run, however, it needs to be initialized first.
  // So, I will put my function here.
  ngOnInit(): void {
    this.getUsers();
  }

  public onAddUser(addForm: NgForm): void {
    document.getElementById('add-user-form')?.click();
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
        if(response != null){
          this.router.navigate(['/login']);
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }
  

}
