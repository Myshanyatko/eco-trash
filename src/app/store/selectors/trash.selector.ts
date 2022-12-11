import { map } from 'rxjs/operators';
import { UserState } from './../state/user.state';
import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { TrashState } from '../state/trash.state';
const selectTreshes = (state: AppState) => state.trash;

export const selectTrash = createSelector(
  selectTreshes,
  (state: TrashState) => state.trash
);
export const selectTrashs = createSelector(
  selectTreshes,
  (state: TrashState) => state.trashs
);
export const selectStoryTrash = createSelector(
  selectTreshes,
  (state: TrashState) => state.storyTrash
);
