import { Story } from './../../models/story';
import { User } from "src/app/models/user";

export interface UserState {
  user: User | null;
  users: User[] | null;
  story: Story[] | null
}

export const initialUserState: UserState = {
  user: null,
  users: null,
  story: null
};
