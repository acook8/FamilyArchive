import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>Welcome to Family Archive!</h1>
                <p>This is a site where you are able to organize your personal archives</p>
                <br></br>
                <p>A project is the top level. This can be potentially divided up by family</p>
                <p>A project holds collections and people. Collections are groups of objects like a journal or scrapbook</p>
                <p>Objects are the individual records. These are individual photos or items</p>
            </div>
        )
    }
}


export default Home