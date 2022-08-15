import { ActionReducerMap } from '@ngrx/store';
import { courseReducer, CourseState } from './courses/course.reducer';
import { sharedReducer, SharedState } from './shared/shared.reducer';
import { studentReducer, StudentState } from './students/student.reducer';

export interface AppState {
  courses: CourseState;
  students: StudentState;
  shared: SharedState;
}

export const reducers: ActionReducerMap<AppState> = {
  courses: courseReducer,
  students: studentReducer,
  shared: sharedReducer,
};
