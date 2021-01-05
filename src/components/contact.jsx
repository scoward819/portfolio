import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import "./contact.css"

function Contact(props) {

  const [contact, setContact]=useState({
    name: "",
    email: "",
    message:"",
    sent: false,
    });

    function handleChange(event)  {
    const { name, value } = event.target;

      setContact((prevValue) => {
        return {
          ...prevValue,
          [name]: value
        };
      });
    }

    function submitMessage(e)  {
      e.preventDefault();
      setContact({
        name:"",
        email:"",
        message:""
      });
    
      console.log(contact.name);
      console.log(contact.email);
      console.log(contact.message);


      Axios.post("http://localhost:3000/email", {contact})
        .then( res => {
          setContact.sent=true 
          resetForm()
        })
        .catch( () => {
          console.log('Message not sent');
        });

      function resetForm() {
        setContact({
          name: '',
          message: '',
          email: '',
        })
      };
    };


    return (

      <div className="container">
        <h2 class="contact-title">Contact me I'd love to hear from you</h2>

          <div className="contactForm">
              <Form>

                <Form.Group >
                  <Form.Label htmlFor="full-name">Full Name</Form.Label>
                  <Form.Control onChange={handleChange} id="full-name" name="name" type ="text" placeholder="Your full name" value={contact.name} />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control onChange={handleChange} id="email" name="email" type ="email" placeholder="Your Email" value={contact.email} />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="message">Your message</Form.Label>
                  <Form.Control  onChange={handleChange} id="message" name="message" as="textarea" rows="3" placeholder="Your message" value={contact.message} />
                </Form.Group>

                <Button onClick={submitMessage} className="d-inlinne-block" size="lg" variant="primary" type="submit" >Send</Button>
                
                {contact.Sent === true ? <strong>Email Sent</strong> : <strong>Email Not Sent</strong> }
                                
              </Form> 
          </div>

      </div>
    );

} 
   
export default Contact;