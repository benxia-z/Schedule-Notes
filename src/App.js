import React from 'react';
import logo from './logo.svg';
import './App.css';

const BACKEND_URL = "http://localhost:5000"

class App extends React.Component {

  state = { "message": "test",
            "randint": "0"
          }

  getMessage() {
    return fetch(`${BACKEND_URL}/hello_world`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          return response.json()
        }
      })
  }

  componentDidMount() {
    console.log("componentWillMount")
    this.getMessage().then(res => {
      console.log(res)
      this.setState({ message: res["response"] })
    })
  }

  randomNumber() {
    this.getMessage().then(res => {
      console.log(res)
      this.setState({ randint: res["random"] })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. message is { this.state.message }
          </p>
          <p>
            Random integer: { this.state.randint }
          </p>
          <button
            type="button"
            onClick={this.randomNumber.bind(this)}
          >
            Random integer
          </button>
        </header>
      </div>
    );
  }
}

export default App;
