import React from 'react';
import {CardDeck} from 'react-bootstrap'
import { CollectionCard } from "./CollectionCard";
import { axios } from "axios";

const data = [
    {collectionId : 1, name: "Collection 1", start_date: "1800", end_date: "1850", image_url: "https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg"},
    {collectionId : 2, name: "Collection 2", start_date: "1936", end_date: "1950", image_url: "https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg"},
    {collectionId : 3, name: "Collection 3", start_date: "1956", end_date: "1970", image_url: "https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg"}
]

const getData = async () => {
    const apiData = await axios.get('http://familyarchive-backend.duckdns.org/collections')
    return apiData
}


const CollectionGallery = () => (
    // let data = getData()
    <CardDeck>
  	    {data.map(collection => <CollectionCard {...collection}/>)}
	</CardDeck>
);

export default CollectionGallery