import { UserState } from './../state/user.state';
import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
const selectUsers = (state: AppState) => state.user;

export const selectUser = createSelector(
  selectUsers,
  (state: UserState) => state.user
);
export const selectStory = createSelector(
  selectUsers,
  (state: UserState) => state.story
);
