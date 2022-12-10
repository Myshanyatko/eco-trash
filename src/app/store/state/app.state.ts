import { initialTrashState, TrashState } from './trash.state';
import { initialUserState, UserState } from './user.state';
import { AuthState, initialAuthState } from './auth.state';

export interface AppState {
  auth: AuthState;
  user: UserState;
  trash: TrashState
}
export const initialAppState: AppState = {
  auth: initialAuthState,
  user: initialUserState,
  trash: initialTrashState
};
export function getInitialState(): AppState {
  return initialAppState;
}
