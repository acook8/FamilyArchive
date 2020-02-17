import React from 'react';


class CollectionInfo extends React.Component {
    render() {
        const collectionInfo = this.props;
        const name=this.props.name
        const startYear = this.props.startYear
        const endYear = this.props.endYear
        return (
            <div>
                <h1>{name}</h1>
                <h3>Start Year: {endYear}</h3>
                <h3>End Year: {startYear}</h3>
            </div>
        )
    }
}

export default CollectionInfo