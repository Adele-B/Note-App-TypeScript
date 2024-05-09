import React from 'react';
import { NoteData, Tag } from '../constants/Types/NoteTypes';
import NoteForm from '../components/NoteForm';
import useNote from '../utils/useNote';

type EditNoteProps = {
  submit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

const EditNote = ({ submit, onAddTag, availableTags }: EditNoteProps) => {
  const note = useNote();
  return (
    <>
      <h1 className="mb-4">Edit note</h1>
      <NoteForm submit={(data) => submit(note.id, data)} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  );
};

export default EditNote;
