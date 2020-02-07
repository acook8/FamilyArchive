import React, { Component } from 'react';
import {Modal,Button,Form} from 'react-bootstrap'

class CreatePerson extends React.Component {
    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Create Person</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Person Name</p>
                    <Form inline>
                        <FormControl type="text" placeholder="Person Name" className="mr-sm-2" />
                    </Form>
                    <p>Birth Date</p>
                    <Form inline>
                        <FormControl type="text" className="mr-sm-2" />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="primary">Create</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default CreatePerson