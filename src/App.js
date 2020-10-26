import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Buckets from "./components/Buckets";
import Header from "./components/layout/Header";
import AddBucket from "./components/AddBucket";
import About from "./components/pages/About";
// import { v4 as uuid } from "uuid";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    buckets: [],
  };

  // jsonPlaceholder as library:
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => this.setState({ buckets: res.data }));
  }

  // Toggle Complete:
  markComplete = (id) => {
    this.setState({
      buckets: this.state.buckets.map((bucket) => {
        if (bucket.id === id) {
          bucket.completed = !bucket.completed;
        }
        return bucket;
      }),
    });
  };

  //delete Bucket:
  delBucket = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          buckets: [...this.state.buckets.filter((bucket) => bucket.id !== id)],
        })
      );
  };

  //addBucket:
  addBucket = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) =>
        this.setState({ buckets: [...this.state.buckets, res.data] })
      );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddBucket addBucket={this.addBucket} />
                  <Buckets
                    buckets={this.state.buckets}
                    markComplete={this.markComplete}
                    delBucket={this.delBucket}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
