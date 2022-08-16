import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  deleteStudent,
  deleteStudentFailure,
  deleteStudentSuccess,
  loadStudents,
  loadStudentsFailure,
  loadStudentsSuccess,
} from './student.actions';
import { of, from } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  mergeMap,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { StudentService } from 'src/app/services/student.service';

@Injectable()
export class StudentEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private studentService: StudentService
  ) {}

  // Run this code when a loadStudents action is dispatched
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudents),
      mergeMap(() =>
        this.studentService.getStudents().pipe(
          map((students) => loadStudentsSuccess({ students: students })),
          catchError((error) => of(loadStudentsFailure({ error })))
        )
      )
    )
  );

  deleteStudent$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deleteStudent),
    switchMap((action) =>
      this.studentService.deleteStudent(action.id).pipe(
        map(() => deleteStudentSuccess({ id: action.id })),
        catchError((error) => of(deleteStudentFailure({ error })))
        // map(() => setFocusedStudent({ student: null }))
      )
    )
  )
);

  // Run this code when the addTodo or removeTodo action is dispatched
  //   saveTodos$ = createEffect(
  //     () =>
  //       this.actions$.pipe(
  //         ofType(addTodo, removeTodo),
  //         withLatestFrom(this.store.select(selectAllTodos)),
  //         switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))
  //       ),
  //     // Most effects dispatch another action, but this one is just a "fire and forget" effect
  //     { dispatch: false }
  //   );
}
