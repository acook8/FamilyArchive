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
        const response = await axios.get('http://localhost:5000/collections?collectionId=' + collectionId)
        const collection = response.data
        // to be done properly this should be mapped
        const collectionName = collection[0].name;
        const startYear = collection[0].start_date;
        const endYear = collection[0].end_date;
        this.setState({collectionName: collectionName})
        this.setState({startYear: startYear})
        this.setState({endYear: endYear})
       }

    render() {
        return (
            <div>
                <CollectionInfo 
                  name = {this.state.collectionName} 
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