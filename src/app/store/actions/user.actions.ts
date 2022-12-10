import { Story } from './../../models/story';
import { User } from './../../models/user';

import { createAction, props } from '@ngrx/store';

export const getUser = createAction(
  '[User Page] Get User',
  props<{ id: number }>()
);
export const setUser = createAction(
  '[Auth Page] Set User',
  props<{ user: User }>()
);
export const getStory = createAction(
  '[User Page] Get Story',
  props<{ id: number }>()
);
export const setStory = createAction(
  '[Auth Page] Set Story',
  props<{ story: Story[] | null}>()
);