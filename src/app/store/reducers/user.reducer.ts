import { User } from './../../models/user';
import {
  setUser,
  setStory,
  setUsers,
  setBonuses,
} from './../actions/user.actions';
import { loginSuccess } from './../actions/auth.actions';

import { initialAuthState } from './../state/auth.state';
import { createReducer, on } from '@ngrx/store';
import { initialUserState } from '../state/user.state';
import { state } from '@angular/animations';

export const userReducer = createReducer(
  initialUserState,
  on(setUser, (state, { user }) => {
    return { ...state, user: user };
  }),
  on(setStory, (state, { story }) => {
    return { ...state, story: story };
  }),
  on(setUsers, (state, { users }) => {
    return { ...state, users: users };
  }),
  on(setBonuses, (state, { bonuses }) => {
    if (state.user != null) {
      var newUser = {
        id: state.user.id,
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        patronymic: state.user.patronymic,
        address: state.user.address,
        email: state.user.email,
        pictureURL: state.user.pictureURL,
        bonuses: state.user.bonuses - bonuses,
      };
      return { ...state, user: newUser };
    } else return state;
  })
);
