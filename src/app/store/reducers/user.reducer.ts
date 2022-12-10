import { setUser, setStory } from './../actions/user.actions';
import { loginSuccess } from './../actions/auth.actions';

import { initialAuthState } from './../state/auth.state';
import { createReducer, on } from '@ngrx/store';
import { initialUserState } from '../state/user.state';

export const userReducer = createReducer(
  initialUserState,
  on(setUser, (state, {user}) => {
    return { ...state, user: user };
  }),
  on(setStory, (state, {story}) => {
    return { ...state, story: story };
  })
);
