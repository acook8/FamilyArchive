import React from 'react';
import CreateObject from './CreateObject';
import ObjectGallery from './ObjectGallery';


class ObjectComponent extends React.Component {
    render() {
        let collectionId = this.props.match.params.collectionId;
        return (
            <div>
                <h1>Collection {collectionId}</h1>
                <CreateObject />
                <ObjectGallery />
            </div>

        )
    }
}

export default ObjectComponent