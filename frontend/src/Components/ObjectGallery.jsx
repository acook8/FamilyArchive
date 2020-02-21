import React from 'react';
import { CardDeck } from "react-bootstrap";
import { ObjectCard } from './ObjectCard';

const data = [
    {
        objectId: 1,
        objectName: "Photo 1",
        date: "1800",
        location: "Kansas",
        imageURL: "https://s3.amazonaws.com/opa-photos/photos/photos/000/061/403/large/Family.jpg?1474852540",
        description: "this is a photo",
    },
    {
        objectId: 2,
        objectName: "Photo 2",
        date: "1805",
        location: "Kansas",
        imageURL: "https://s3.amazonaws.com/opa-photos/photos/photos/000/061/403/large/Family.jpg?1474852540",
        description: "this is a photo",
    },
    {
        objectId: 3,
        objectName: "Photo 2",
        date: "1805",
        location: "Kansas",
        imageURL: "https://s3.amazonaws.com/opa-photos/photos/photos/000/061/403/large/Family.jpg?1474852540",
        description: "this is a photo",
    }
]

const ObjectGallery = (props) => (
    <div>
        {/* <h1>{CollectionId}</h1> */}
        <CardDeck>
            {data.map(object => <ObjectCard {...object} />)}
        </CardDeck>
    </div>
);

export default ObjectGallery