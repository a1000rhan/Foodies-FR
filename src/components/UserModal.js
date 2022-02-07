import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";

const UserModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setIsOpen(false);
  };
  return (
    <div>
      <h3>
        <BsPersonCircle
          onClick={() => setIsOpen(true)}
          className=" text-light"
        />
      </h3>

      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <BsPersonCircle /> User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>User Name </Form.Label>
            <Form.Control
              name="username"
              value={user.username}
              type="text"
              onChange={handleChange}
            />
            <div>
              <Form.Label>Eamil </Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Change Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button className="btn-regster" onClick={handleSubmit}>
              Sign In
            </button>
            <button className="btn-regster" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserModal;
