import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class UserService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiServerUrl}/users/all`);
    }

    public addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}/users/add`,user);        
    } 

    public updateUser(user: User, id : number): Observable<User> {
        return this.http.put<User>(`${this.apiServerUrl}/users/update/${id}`,user);        
    }
    
    public deleteUser(id: number): Observable<User> {
        return this.http.delete<User>(`${this.apiServerUrl}/users/delete/${id}`);        
    } 

    public findByUsernamePassword(user: User): Observable<User> {
        return this.http.get<User>(`${this.apiServerUrl}/users/find/${user.username}/${user.password}`);
    }
}