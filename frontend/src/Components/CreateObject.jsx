import React from 'react';
import { Button, Modal, Form, FormControl } from "react-bootstrap";

class CreateObject extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            objectName: '',
            date: '',
            location: '',
            imageURL: '',
            description: ''
        };
    }

    render() {
        let closeModal = () => this.setState({open: false});
        let openModal = () => this.setState({open: true});
        let handleSubmit = () => {
            this.setState({open: false})
            //api post call
            //clear state
        }

        return (
            <>
                <Button variant="primary" onClick={openModal}>
                    Upload Object
                </Button>

                <Modal show={this.state.open} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Object</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <p>Object Name</p>
                        <Form inline>
                            <FormControl
                                type="text"
                                className="mr-sm-2"
                                value={this.state.objectName}
                                onChange={event => this.setState({objectName: event.target.value})}
                              />
                        </Form>
                        <p>Date</p>
                        <Form inline>
                            <FormControl 
                                type="text"
                                className="mr-sm-2"
                                value={this.state.date}
                                onChange={event => this.setState({date: event.target.value})}
                            />
                        </Form>
                        <p>Location</p>
                        <Form inline>
                            <FormControl 
                                type="text"
                                className="mr-sm-2"
                                value={this.state.location}
                                onChange={event => this.setState({location: event.target.value})}
                            />
                        </Form>
                        <p>Description</p>
                        <Form inline>
                            <FormControl 
                                as="textarea"
                                rows="3"
                                value={this.state.description}
                                onChange={event => this.setState({description: event.target.value})}
                            />
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default CreateObject