import { CourseState } from './courses/course.reducer';
import { SharedState } from './shared/shared.reducer';

export interface AppState {
  courses: CourseState;
  shared: SharedState;
}
