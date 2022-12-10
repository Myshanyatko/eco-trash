import { loginSuccess } from './../actions/auth.actions';

import { initialAuthState } from './../state/auth.state';
import { createReducer, on } from '@ngrx/store';

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state) => {
    return { ...state, isLoginIn: true };
  })
);
