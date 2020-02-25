import React from 'react'
import CreateCollection from './CreateCollection'
import CollectionGallery from './CollectionGallery'


class CollectionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
      }

      rerenderParentCallback() {
        this.forceUpdate();
      }

    render() {
        return (
            <div>
                <h1>Collections</h1>
                <CreateCollection rerenderParentCallback={this.rerenderParentCallback}/>
                <CollectionGallery />
            </div>
        )
    }
}

export default CollectionComponent