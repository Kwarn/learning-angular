import { createReducer, on } from '@ngrx/store';
import { Student } from 'src/app/types';
import {
  deleteStudent,
  deleteStudentFailure,
  deleteStudentSuccess,
  loadStudents,
  loadStudentsFailure,
  loadStudentsSuccess,
  setFocusedStudent,
} from './student.actions';

export interface StudentState {
  students: Student[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
  focusedStudent: Student | undefined;
}

export const studentState: StudentState = {
  students: [],
  error: null,
  status: 'pending',
  focusedStudent: undefined,
};

export const studentReducer = createReducer(
  studentState,
  on(loadStudents, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(loadStudentsSuccess, (state, { students }) => ({
    ...state,
    students: students,
    error: null,
    status: 'success',
  })),
  on(loadStudentsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),
  on(deleteStudent, (state, { id }) => ({
    ...state,
    status: 'loading',
  })),
  on(deleteStudentSuccess, (state, { id }) => ({
    ...state,
    students: state.students.filter((student) => student.id !== id),

    status: 'success',
  })),
  on(deleteStudentFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error,
  })),
  on(setFocusedStudent, (state, { student }) => ({
    ...state,
    focusedStudent: student,
  }))
);
