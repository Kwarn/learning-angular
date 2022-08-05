import { createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/types';
import {
  deleteCourse,
  loadCourses,
  loadCoursesFailure,
  loadCoursesSuccess,
} from './course.actions';

export interface CourseState {
  courses: Course[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CourseState = {
  courses: [],
  error: null,
  status: 'pending',
};

export const courseReducer = createReducer(
  initialState,
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
  on(deleteCourse, (state, { id }) => ({
    ...state,
    courses: state.courses.filter((course) => course.id !== id),
  }))
);
