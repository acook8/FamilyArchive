import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


export class CollectionCard extends React.Component {
    render() {
        const collection = this.props;
        return (
            <Link to={`/collection/${collection.collectionId}`}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={collection.image_url} />
                    <Card.Body>
                        <Card.Title>{collection.name}</Card.Title>
                        <Card.Text>
                            <div>Start date: {collection.start_date}</div>
                            <div>End date: {collection.end_date}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
                );
            }
}