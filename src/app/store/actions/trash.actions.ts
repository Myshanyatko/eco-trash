import { Trash } from './../../models/trash';
import { Story } from './../../models/story';
import { User } from './../../models/user';

import { createAction, props } from '@ngrx/store';
import { StoryTrash } from 'src/app/models/storyTrash';

export const getTrash = createAction(
  '[Trash Page] Get Trash',
  props<{ id: number }>()
);
export const setTrash = createAction(
  '[Trash Page] Set Trash',
  props<{ trash: Trash }>()
);
export const getTrashs = createAction(
  '[Trash Page] Get Trashs',
  props<{ filter: string }>()
);
export const setTrashs = createAction(
  '[Trash Page] Set Trashs',
  props<{ trashs: Trash[] }>()
);
export const getAble = createAction(
  '[Trash Page] Able Trash',
  props<{ able: boolean, id: number }>()
);
export const setAble = createAction(
  '[Trash Page] Set Able Trash',
  props<{ able: boolean }>()
);
export const getStoryTrash = createAction(
  '[Trash Page] Get Story Trash',
  props<{ id: number }>()
);
export const setStoryTrash= createAction(
  '[Trash Page] Set Story Trash',
  props<{ story: StoryTrash[]| null}>()
);