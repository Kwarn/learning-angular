import { createAction, props } from '@ngrx/store';
import { Course, Enroll, ListNames, Student } from 'src/app/types';

export const setActiveList = createAction(
  '[App Page] Set Active List',
  props<{ listName: ListNames }>()
);
export const setFocusedItem = createAction(
  '[List-Item] Set Focused Item',
  props<{ item: Course | Student | undefined }>()
);

