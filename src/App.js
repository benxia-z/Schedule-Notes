import React from 'react';
import './App.css';

const BACKEND_URL = "http://localhost:5000"

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return(
      <div className="Clock">
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "message": "test",
              "randint": "0"
            }
    this.randomNumber = this.randomNumber.bind(this)
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
          <p>
            Edit <code>src/App.js</code> and save to reload. message is { this.state.message }
          </p>
          <p>
            Random integer: { this.state.randint }
          </p>
          <button
            type="button"
            onClick={this.randomNumber}
          >
            Random integer
          </button>
        </header>
        <p>
          <Clock />
        </p>
      </div>
    );
  }
}


export default App;
