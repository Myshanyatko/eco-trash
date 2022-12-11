import { setAble, setStoryTrash, setTrash, setTrashs } from './../actions/trash.actions';
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
  on(setStoryTrash, (state, { story }) => {
    return { ...state, storyTrash: story };
  }),
  on(setAble, (state, { able }) => {
    if (state.trash != null) {
      var newTrash = {
        id: state.trash.id,
        address: state.trash.address,
        glassFullness: state.trash.glassFullness,
        paperFullness: state.trash.paperFullness,
        plasticFullness: state.trash.plasticFullness,
        disabled: able,
      };
      return { ...state, trash: newTrash };
    } else return state;
  })
);
