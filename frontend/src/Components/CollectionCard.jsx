import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


export class CollectionCard extends React.Component {
    render() {
        const collection = this.props;
        return (
            <Link to={`/collection/${collection._id}`}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={collection.imageURL} />
                    <Card.Body>
                        <Card.Title>{collection.collectionName}</Card.Title>
                        <Card.Text>
                            <div>Start date: {collection.startYear}</div>
                            <div>End date: {collection.endYear}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
                );
            }
}