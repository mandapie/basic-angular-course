import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book): Observable<Book> {
    //// uncomment this to view error action in the redux dev tool
    // const err = new Error('test error call');
    // return throwError(() => err);

    return of(book);
  }
}
