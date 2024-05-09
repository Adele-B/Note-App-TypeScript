// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';
import { NoteData, RawNote, Tag } from './constants/Types/NoteTypes';
import useLocalStorage from './utils/useLocalStorage';
import NewNote from './Pages/NewNote';
import NoteList from './Pages/NoteList';
import NoteLayout from './Layout/NoteLayout';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', []);
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []);

  const notesWithTags = useMemo(() => notes.map((note) => ({ ...note, tags: tags.filter((tag) => note.tagIds.includes(tag.id)) })), [notes, tags]);

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) }
    ]);
  };

  const addTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<NoteList availableTags={tags} notes={notesWithTags} />} />
        <Route path="/new" element={<NewNote submit={onCreateNote} onAddTag={addTag} availableTags={tags} />} />
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note />} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
