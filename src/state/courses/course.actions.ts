import { createAction, props } from '@ngrx/store';
import { Course, Enroll } from 'src/app/types';

export const deleteCourse = createAction(
  '[Courses] Remove Course',
  props<{ id: string }>()
);

export const deleteCourseSuccess = createAction(
  '[Courses] Remove Course Success',
  props<{ id: string }>()
);

export const deleteCourseFailure = createAction(
  '[Courses] Remove Course Failure',
  props<{ error: string }>()
);

export const loadCourses = createAction('[Courses Page] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Courses API] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Courses API] Load Courses Failure',
  props<{ error: string }>()
);

export const setFocusedCourse = createAction(
  '[Course List Item] Focus Course',
  props<{ course: Course | null }>()
);

export const enrollStudent = createAction(
  '[Enroll] Enroll',
  props<{ enroll: Enroll }>()
);

export const enrollSuccess = createAction(
  '[Enroll] Enroll Success',
  props<{ enroll: Enroll }>()
);

export const enrollFailure = createAction(
  '[Enroll] Enroll Success',
  props<{ error: string }>()
);
