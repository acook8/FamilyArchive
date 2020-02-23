import React from 'react';
import {CardDeck} from 'react-bootstrap'
import { CollectionCard } from "./CollectionCard";
import axios from "axios";


class CollectionGallery extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          collections: []
        };
      }

      async componentDidMount() {
        let apiData = await axios.get('https://familyarchive-backend.duckdns.org/collections')
        let data = apiData.data
        console.log("apiData: ", apiData)
        this.setState({collections: data})
      }

    render() {
        const collections = this.state.collections
        console.log("collections: ", collections[0])
        return (
            <CardDeck>
  	            {collections.map(collection => <CollectionCard {...collection}/>)}
	        </CardDeck>
        )
    }
}

export default CollectionGallery