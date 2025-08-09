import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from './book.actions';
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {
    addBook$ = createEffect(() => this.actions$.pipe(
        ofType(bookActions.AddBook), // only run this effect when the action is AddBook
        mergeMap((action) => // mergeMap allows multiple concurrent observable calls
            this.bookService.addBook(action).pipe( // in this case, it allows multiple addBook calls
                map(book => bookActions.AddBookSuccess(book)), // after getting the response back (`book` param), dispatch the AddBookSuccess action
                catchError((error) => of(bookActions.AddBookError({error}))) // on errors, dispatch AddBookError action as an observable (via the `off()` function)
        ))
    ));

    constructor(
        private actions$: Actions,
        private bookService: BookService
    ) {}
}