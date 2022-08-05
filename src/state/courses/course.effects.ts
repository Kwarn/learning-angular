import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CourseService } from '../../app/services/course.service';
import {
  loadCourses,
  loadCoursesSuccess,
  loadCoursesFailure,
} from './course.actions';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllCourses } from './course.selectors';
import { AppState } from '../app.state';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private courseService: CourseService
  ) {}

  // Run this code when a loadTodos action is dispatched
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.courseService.getCourses()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((courses) => loadCoursesSuccess({ courses: courses })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadCoursesFailure({ error })))
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
