import React from 'react';
import { NoteData, Tag } from '../constants/Types/NoteTypes';
import NoteForm from '../components/NoteForm';

type NewNoteProps = {
  submit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

const NewNote = ({ submit, onAddTag, availableTags }: NewNoteProps) => (
  <>
    <h1 className="mb-4">New note</h1>
    <NoteForm submit={submit} onAddTag={onAddTag} availableTags={availableTags} />
  </>
);

export default NewNote;
