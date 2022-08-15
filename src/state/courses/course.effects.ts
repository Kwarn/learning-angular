import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CourseService } from '../../app/services/course.service';
import {
  loadCourses,
  loadCoursesSuccess,
  loadCoursesFailure,
  deleteCourse,
  deleteCourseSuccess,
  deleteCourseFailure,
  setFocusedCourse,
} from './course.actions';
import { of, from } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private courseService: CourseService
  ) {}

  // Run this code when a loadCourses action is dispatched
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      mergeMap(() =>
        this.courseService.getCourses().pipe(
          map((courses) => loadCoursesSuccess({ courses: courses })),
          catchError((error) => of(loadCoursesFailure({ error })))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCourse),
      switchMap((action) =>
        this.courseService.deleteCourse(action.id).pipe(
          map(() => deleteCourseSuccess({ id: action.id })),
          catchError((error) => of(deleteCourseFailure({ error })))
          // map(() => setFocusedCourse({ course: null }))
        )
      )
    )
  );

  // saveTodos$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(addTodo, removeTodo),
  //       withLatestFrom(this.store.select(selectAllTodos)),
  //       switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))
  //     ),
  //   // Most effects dispatch another action, but this one is just a "fire and forget" effect
  //   { dispatch: false }
  // );
}
