import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Cours } from "../models/cours.model";


@Injectable({
    providedIn: 'root'
})
export class CoursService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

   public getCoursByNumberCours(nb_cours: number): Observable<Cours[]>{
    return this.http.get<[]>(`${this.apiServerUrl}/courses/find/${nb_cours}`);
   }

}