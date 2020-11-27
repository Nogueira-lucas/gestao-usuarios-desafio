import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/users.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  getUsers(): Observable<UserInterface[]> {
    try {
      return this.http.get<UserInterface[]>(`${this.baseUrl}/users`);
    }catch(err) {
      return err;
    }
  }

  createUser(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.baseUrl}/users`, user)
  }

  deleteUserById(id: number) {
    try {
      return this.http.delete(`${this.baseUrl}/users/${id}`);
    }catch(err) {
      return err;
    }
  }

  updateUser(id: number, user: UserInterface) {
    try {
      return this.http.put(`${this.baseUrl}/users/${id}`, user);
    }catch(err) {
      return err;
    }
  }

}
