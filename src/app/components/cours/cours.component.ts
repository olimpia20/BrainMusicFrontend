import { Component, OnInit } from '@angular/core';
import { CoursService } from '../shared/services/cours.service';
import { Cours } from '../shared/models/cours.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  
  cours: Cours[] = [];
  p:number=1;  //nr de elemente pe o pagina
  courseId: number = 1; //id-ul cursului

  constructor(private route: ActivatedRoute, private coursService: CoursService) {}

  ngOnInit(): void {
  const id = this.route.snapshot.params['id'];
  
  this.courseId = Number(id) || 1;
    console.log('Course ID:', this.courseId);
  
    this.coursService.getCoursByNumberCours(this.courseId).subscribe(
        (response: Cours[]) => {
          console.log(response);
          this.cours = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

}
