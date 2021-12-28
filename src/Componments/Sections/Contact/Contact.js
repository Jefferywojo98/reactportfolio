import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validateEmail } from "./Helper";
function Contact() {
    const [email, setEmail] = useState("");
    const [FullName, setFullName] = useState("");
    const [Message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (event) => {
      const { target } = event;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === "email") {
        setEmail(inputValue);
      } else if (inputType === "FullName") {
        setFullName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        return;
      }
      if (!FullName) {
        setErrorMessage("Name is required");
  
        return;
      }
      if (!Message) {
        setErrorMessage("Message is required");
  
        return;
      }
      alert(`${FullName}, thanks for send me a message!`);
  
      setFullName("");
      setMessage("");
      setEmail("");
    };
  
    return (
      <div>
        <h1 className="text-center">Contact Page</h1>
        <div className="formCont">
          <div className="formStyle">
            <Form>
              <Form.Group className="text-center">
                <Form.Label >Name:</Form.Label>
                <Form.Control
                  value={FullName}
                  name="Full Name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Full Name"
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  value={Message}
                  name="message"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Send me a message!"
                  as="textarea"
                  size="lg"
                  rows={3}
                />
              </Form.Group>
            </Form>
            <Button className="justify-content-center"
              type="button"
              onClick={handleFormSubmit}
              variant="outline-light"
            >
              Submit
            </Button>
            {errorMessage && (
              <div>
                <p className="errorText">{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;