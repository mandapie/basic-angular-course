import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = createAction('[Book] Added Book successfully', props<Book>());
export const AddBookError = createAction('[Book] Add Book failure', props<{error:any}>());

export const RemoveBook = createAction('[Book] Remove Book', props<{id: string}>());