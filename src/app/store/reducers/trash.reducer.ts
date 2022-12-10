import { setTrash, setTrashs } from './../actions/trash.actions';
import { createReducer, on } from '@ngrx/store';
import { initialTrashState } from '../state/trash.state';

export const trashReducer = createReducer(
  initialTrashState,
  on(setTrash, (state, { trash }) => {
    return { ...state, trash: trash };
  }),
  on(setTrashs, (state, { trashs }) => {
    return { ...state, trashs: trashs };
  }),
);
