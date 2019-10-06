import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import Landing from '../components/Landing';


class MainPage extends Component {
    render() {
        return (
            <div className="mainPage">
               <NavBar />
               <Landing />
            </div>
        );
    }
}

export default MainPage;