import React from "react";
import { Card } from "react-bootstrap";

export class ObjectCard extends React.Component {
    render() {
        const object = this.props;
        return (
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={object.imageURL}/>
                <Card.Body>
                    <Card.Title>{object.name}</Card.Title>
                    <Card.Text>
                        <div>Date: {object.date}</div>
                        <div>Location: {object.location}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}