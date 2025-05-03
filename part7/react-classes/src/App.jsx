import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anecdotes: [],
      current: 0,
    };
  }

  componentDidMount() {
    console.log("hello");
    this.setState({
      anecdotes: [
        {
          content: "Felix Is Here",
        },
      ],
    });
  }

  handleClick(ev) {
    console.log(this);
    const current = Math.floor(Math.random() * this.state.anecdotes.length);
    this.setState({ current });
  }

  render() {
    if (this.state.anecdotes.length === 0) {
      return <div>no anecdotes</div>;
    }

    const { anecdotes, current } = this.state;
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <div>{anecdotes[current].content}</div>
        <button onClick={this.handleClick.bind(this)}>Next</button>
      </div>
    );
  }
}

export default App;
