import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CourseState } from './course.reducer';

export const selectCourses = (state: AppState) => state.courses;
export const selectAllCourses = createSelector(
  selectCourses,
  (state: CourseState) => state.courses
);
export const selectFocusedCourse = createSelector(
  selectCourses,
  (state: CourseState) => state.focusedCourse
);
