import { initialUserState, UserState } from './user.state';
import { AuthState, initialAuthState } from './auth.state';

export interface AppState {
  auth: AuthState;
  user: UserState
}
export const initialAppState: AppState = {
  auth: initialAuthState,
  user: initialUserState
};
export function getInitialState(): AppState {
  return initialAppState;
}
