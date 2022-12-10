
import { createAction, props } from '@ngrx/store';

// login
export const login = createAction(
  '[Auth Page] Login',
  props<{ email: string, password: string }>()
);
export const loginAdmin = createAction(
  '[Auth Page] Login Admin',
  props<{ email: string, password: string }>()
);
export const loginSuccess = createAction(
  '[Auth Page] Login Success',
  props<{ id: number }>()
);
export const loginAdminSuccess = createAction(
  '[Auth Page] Login Admin Success',
  props<{ id: number }>()
);