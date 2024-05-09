import React from 'react';
import {
  Button, Col, Form, Modal, Row, Stack
} from 'react-bootstrap';
import { Tag } from '../constants/Types/NoteTypes';

type EditTagsModalProps = {
  availableTags: Tag[]
  deleteTag: (id: string) => void
  editTag: (id: string, label: string) => void
  handleClose: () => void
  show: boolean
}

const EditTagsModal = ({
  availableTags, deleteTag, editTag, handleClose, show
}: EditTagsModalProps) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Tags</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Stack gap={2}>
          {availableTags.map((tag) => (
            <Row key={tag.id}>
              <Col>
                <Form.Control type="text" onChange={(e) => editTag(tag.id, e.target.value)} value={tag.label} />
              </Col>
              <Col xs="auto">
                <Button onClick={() => deleteTag(tag.id)} variant="outline-danger">&times;</Button>
              </Col>
            </Row>
          ))}
        </Stack>
      </Form>
    </Modal.Body>
  </Modal>
);

export default EditTagsModal;
