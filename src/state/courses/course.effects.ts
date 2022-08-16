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
  enrollStudent,
  enrollSuccess,
  enrollFailure,
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
import { EnrolmentService } from 'src/app/services/enrolment.service';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private courseService: CourseService,
    private enrolmentService: EnrolmentService
  ) {}

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

  enrollStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enrollStudent),
      switchMap((action) =>
        this.enrolmentService.enroll(action.enroll).pipe(
          map(() => enrollSuccess({ enroll: action.enroll })),
          catchError((error) => of(enrollFailure({ error })))
        )
      )
    )
  );
}
