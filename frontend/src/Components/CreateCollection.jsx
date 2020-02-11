import React from 'react';
import {Modal,Button,Form,FormControl} from 'react-bootstrap'

class CreateCollection extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          open: false,
          collectionName: '',
          startYear: '',
          endYear: '',
          collectionDescription: '',
          collectionLocation: ''
        };
      }
      
      
      render(){
        let closeModal = () => this.setState({ open: false })
        let openModal = () => this.setState({open:true})
        let handleSubmit = () => {
          //api post call
          this.setState({
            collectionName: '',
            startYear: '',
            endYear: '',
            collectionDescription: '',
            collectionLocation: '',
            open: false
          })
          
        }
        
     
        return (
          <>
            <Button variant="primary" onClick={openModal}>
              Create Collection
            </Button>
      
            <Modal show={this.state.open} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Create Collection</Modal.Title>
              </Modal.Header>
              
              <Modal.Body>
                  <p>Collection Name</p>
                  <Form inline>
                      <FormControl 
                        type="text" 
                        className="mr-sm-2" 
                        value={this.state.collectionName} 
                        onChange={event =>this.setState({collectionName: event.target.value})}
                        />
                  </Form>
                  <p>Start Year</p>
                  <Form inline>
                      <FormControl 
                        type="text" 
                        className="mr-sm-2" 
                        value={this.state.startYear} 
                        onChange={event =>this.setState({startYear: event.target.value})}
                        />
                  </Form>
                  <p>End Year</p>
                  <Form inline>
                      <FormControl 
                      type="text" 
                      className="mr-sm-2" 
                      value={this.state.endYear}
                      onChange={event =>this.setState({endYear: event.target.value})}
                      />
                    </Form>
                  <p>Storage Location</p>
                  <Form inline>
                      <FormControl 
                      type="text" 
                      className="mr-sm-2" 
                      value={this.state.collectionLocation}
                      onChange={event =>this.setState({collectionLocation: event.target.value})}
                      />
                  </Form>
                  <p>Collection Description</p>
                  <Form>
                  <Form.Control 
                    as="textarea" 
                    rows="3" 
                    value={this.state.collectionDescription} 
                    onChange={event =>this.setState({collectionDescription: event.target.value})}
                    />
                  </Form>
              </Modal.Body>
              
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Create
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
      }
    }
    
    export default CreateCollection;