import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/types';

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
