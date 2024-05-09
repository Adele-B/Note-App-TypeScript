import { useOutletContext } from 'react-router-dom';
import { Note } from '../constants/Types/NoteTypes';

function useNote() {
  return useOutletContext<Note>();
}

export default useNote;
