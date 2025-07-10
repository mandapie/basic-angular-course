import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  newTitle: string = "";
  newAuthor: string = "";

  books: BookModel[] = [];

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook() {
    if (this.newTitle.trim().length && this.newAuthor.trim().length) {
      let newBook: BookModel = {
        id: new Date().getTime(),
        title: this.newTitle,
        author: this.newAuthor
      }
      this.books.push(newBook);
      localStorage.setItem("books", JSON.stringify(this.books));

      this.newTitle = "";
      this.newAuthor = "";
    }

  }

  deleteBook(id: number) {
    let index = this.books.findIndex(book => book.id);
    this.books.splice(index + 1, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
  }

}
