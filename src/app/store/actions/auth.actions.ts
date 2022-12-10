
import { createAction, props } from '@ngrx/store';

// login
export const login = createAction(
  '[Auth Page] Login',
  props<{ email: string, password: string }>()
);
export const loginSuccess = createAction(
  '[Auth Page] Login Success',
  props<{ id: number }>()
);