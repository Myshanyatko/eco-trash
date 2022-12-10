import { Trash } from './../../models/trash';

export interface TrashState {
  trashs: Trash[] | null;
  trash: Trash | null;
}

export const initialTrashState: TrashState = {
  trashs: null,
  trash: null,
};
