import React, { Component } from 'react';
import {Card,Button, CardDeck} from 'react-bootstrap'
import { CollectionCard } from "./CollectionCard";


const data = [
    {name: "Collection 1", start_date: "1800", end_date: "1850", image_url: "https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg"},
    {name: "Collection 2", start_date: "1936", end_date: "1950", image_url: "https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg"},
    {name: "Collection 3", start_date: "1956", end_date: "1970", image_url: "https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg"}
]


const CollectionGallery = (props) => (
	<CardDeck>
  	    {data.map(collection => <CollectionCard {...collection}/>)}
	</CardDeck>
);

export default CollectionGallery