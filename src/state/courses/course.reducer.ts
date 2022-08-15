import { createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/types';
import {
  deleteCourse,
  deleteCourseFailure,
  deleteCourseSuccess,
  loadCourses,
  loadCoursesFailure,
  loadCoursesSuccess,
  setFocusedCourse,
} from './course.actions';

export interface CourseState {
  courses: Course[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
  focusedCourse: Course | undefined | null;
}

export const courseState: CourseState = {
  courses: [],
  error: null,
  status: 'pending',
  focusedCourse: undefined,
};

export const courseReducer = createReducer(
  courseState,
  on(loadCourses, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses: courses,
    error: null,
    status: 'success',
  })),
  on(loadCoursesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),
  on(deleteCourse, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(deleteCourseSuccess, (state, { id }) => ({
    ...state,
    courses: state.courses.filter((course) => course.id !== id),
    status: 'success',
  })),
  on(deleteCourseFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error,
  })),
  on(setFocusedCourse, (state, { course }) => ({
    ...state,
    focusedCourse: course,
  }))
);
