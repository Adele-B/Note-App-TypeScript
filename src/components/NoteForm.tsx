import React, { FormEvent, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Col, Form, Row, Stack
} from 'react-bootstrap';
import CreatableReactSelect from 'react-select/creatable';
import { v4 as uuidV4 } from 'uuid';
import { NoteData, Tag } from '../constants/Types/NoteTypes';

type NoteFormProps = {
  submit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
} & Partial<NoteData>

const NoteForm = ({ submit, onAddTag, availableTags, title = '', markdown = '', tags = [] }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    submit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags
    });

    navigate('..');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control defaultValue={title} ref={titleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                onCreateOption={(label: string) => {
                  const newTag = { id: uuidV4(), label };
                  onAddTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
                value={selectedTags.map((tag) => ({ label: tag.label, value: tag.id }))}
                options={availableTags.map((tag) => ({ label: tag.label, value: tag.id }))}
                onChange={(tags) => {
                  setSelectedTags(tags.map((tag) => ({ label: tag.label, id: tag.value })));
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="Markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" defaultValue={markdown} ref={markdownRef} rows={15} />
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">Save</Button>
          <Link to="..">
            <Button type="button" variant="secondary">Cancel</Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
