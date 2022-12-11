import { StoryTrash } from 'src/app/models/storyTrash';
import { Trash } from './../../models/trash';

export interface TrashState {
  trashs: Trash[] | null;
  trash: Trash | null;
  storyTrash: StoryTrash[] | null;
}

export const initialTrashState: TrashState = {
  trashs: null,
  trash: null,
  storyTrash: null,
};
