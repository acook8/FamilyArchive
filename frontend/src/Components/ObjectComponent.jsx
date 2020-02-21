import React from 'react';
import CreateObject from './CreateObject';
import ObjectGallery from './ObjectGallery';
import CollectionInfo from './CollectionInfo'
import axios from "axios";


class ObjectComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          collectionName: '',
          startYear: '',
          endYear: ''
        };
      }
    
      async componentDidMount() {
        let collectionId = this.props.match.params.collectionId;
        const response = await axios.get('https://familyarchive-backend.duckdns.org/collections?collectionId=' + collectionId)
        const collection = response.data
        console.log(collection)
        const collectionName = collection.collectionName;
        const startYear = collection.startYear;
        const endYear = collection.endYear;
        this.setState({collectionName: collectionName})
        this.setState({startYear: startYear})
        this.setState({endYear: endYear})
       }

    render() {
        return (
            <div>
                <CollectionInfo 
                  collectionName = {this.state.collectionName} 
                  startYear = {this.state.startYear}
                  endYear = {this.state.endYear}
                />
                <CreateObject />
                <ObjectGallery />
            </div>
        )
    }
}

export default ObjectComponent