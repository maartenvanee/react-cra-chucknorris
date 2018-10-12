import React, { Component } from "react";
import JokeList from "./Components/JokeList";
import "./App.css";

class App extends Component {

    handleClick = () => {
        console.log('handleClick, this is:', this);
    }

    render() {
        return (
            <div className="chuckNorrisApp">
                <h1>Chuck Norris Jokes</h1>
                <button className="actionButton" onClick={this.handleClick}>Get new jokes</button>
                <button className="actionButton">Start/Stop adding favorites</button>
                <hr/>
                <JokeList title="Jokes"/>
                <JokeList title="Favorites"/>
            </div>
        );
    }
}

export default App;
