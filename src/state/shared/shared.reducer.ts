import { createReducer, on } from '@ngrx/store';
import { ListNames } from 'src/app/types';
import { setActiveList } from './shared.actions';

export interface SharedState {
  activeList: ListNames;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const sharedState: SharedState = {
  activeList: 'courses',
  error: null,
  status: 'pending',
};

export const sharedReducer = createReducer(
  sharedState,
  on(setActiveList, (state, { listName }) => ({
    ...state,
    activeList: listName,
  }))
);
