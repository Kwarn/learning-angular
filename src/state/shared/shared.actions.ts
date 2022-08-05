import { createAction, props } from '@ngrx/store';
import { ListNames } from 'src/app/types';

export const setActiveList = createAction('[App Page] Set Active List', props<{ listName: ListNames }>());

