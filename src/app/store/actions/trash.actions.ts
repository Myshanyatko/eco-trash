import { Trash } from './../../models/trash';
import { Story } from './../../models/story';
import { User } from './../../models/user';

import { createAction, props } from '@ngrx/store';

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