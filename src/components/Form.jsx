import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Footer extends Component {

    render() {
        return(
            <div className="container">
                <div className="form">
       <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Select</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
          <Col sm={10}>
            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
      </Form>
                </div>
            </div>
        );
    }

}

export default Footer;