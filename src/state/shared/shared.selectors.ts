import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { SharedState } from './shared.reducer';

export const selectShared = (state: AppState) => state.shared;

export const selectActiveList = createSelector(
  selectShared,
  (state: SharedState) => state.activeList
);
