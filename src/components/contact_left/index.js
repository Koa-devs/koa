import React from 'react';
import '../contact_left/style.css';
import {Row, Col} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Contact_Left() {
  return (
    <div>
           <Row className="Contact-text">
              <Col xl={12}>
              <h1 className="p-heading1">Cuentanos que quieres hacer</h1>
              <p className="p-heading2">
              Hola <strong>Amigo</strong><br />
              This is my test lorem ipsum. This is my test lorem ipsum. This is my test lorem ipsum. This is my test lorem ipsum. This is my test lorem ipsum. This is my test lorem ipsum. This is my test lorem ipsum. This is my test lorem ipsum. This is my test lorem ipsum. 
A linebreak before this.

              </p>
              </Col>
           </Row>
          
            <Row className="contact-left-footer" >
              <SocialIcons />
            </Row>
    </div>
  );
}

export default Contact_Left;
