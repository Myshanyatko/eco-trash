import { userReducer } from './user.reducer';
import { authReducer } from './auth.reducer';
import { AppState } from './../state/app.state';
import { ActionReducerMap } from "@ngrx/store";

export const appReducers: ActionReducerMap<AppState, any> = {
    auth: authReducer,
    user: userReducer
  }
  