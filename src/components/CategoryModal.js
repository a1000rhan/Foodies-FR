import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { MdFoodBank } from "react-icons/md";

const CategoryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState({
    title: "",
  });

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn-regster" onClick={() => setIsOpen(true)}>
        Add Category
      </button>

      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <MdFoodBank /> Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>Category Title </Form.Label>
            <Form.Control
              name="title"
              value={category.title}
              type="text"
              onChange={handleChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button className="btn-regster" onClick={handleSubmit}>
              Add Category
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CategoryModal;
