import React, { Component } from 'react';
import { Card,Button } from "react-bootstrap";


export class CollectionCard extends React.Component {
    render() {
        const collection = this.props;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={collection.image_url}/>
                <Card.Body>
                    <Card.Title>{collection.name}</Card.Title>
                    <Card.Text>
                        <div>Start date: {collection.start_date}</div>
                        <div>End date: {collection.end_date}</div>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        );
    }
}