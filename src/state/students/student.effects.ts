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
import { of } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';

import { StudentService } from 'src/app/services/student.service';

@Injectable()
export class StudentEffects {
  constructor(
    private actions$: Actions,
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
}
