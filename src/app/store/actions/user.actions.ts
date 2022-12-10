import { Story } from './../../models/story';
import { User } from './../../models/user';

import { createAction, props } from '@ngrx/store';

export const getUser = createAction(
  '[User Page] Get User',
  props<{ id: number }>()
);
export const setUser = createAction(
  '[User Page] Set User',
  props<{ user: User }>()
);
export const getUsers = createAction(
  '[User Page] Get Users',
  props<{ filter: string }>()
);
export const setUsers = createAction(
  '[User Page] Set Users',
  props<{ users: User[] }>()
);
export const getStory = createAction(
  '[User Page] Get Story',
  props<{ id: number }>()
);
export const setStory = createAction(
  '[Auth Page] Set Story',
  props<{ story: Story[] | null}>()
);
export const useBonuses = createAction(
  '[User Page] Use Bonuses',
  props<{ bonuses: number, id: number }>()
);
export const setBonuses = createAction(
  '[User Page] Set Bonuses',
  props<{ bonuses: number }>()
);