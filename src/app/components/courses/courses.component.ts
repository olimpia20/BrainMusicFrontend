import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(private router: Router) {}

  redirectToCoursPage(id:number): void{
    this.router.navigate(['/cours'], { queryParams: { id: id} });
  }
}
