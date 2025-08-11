import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Smith"}
  ]

  constructor() { }

  // use of() to return users because don't have a user class or interface defined
  // just want to create a simple function for out unit test
  getUsers() {
    return of(this.users);
  }
}
