import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddBucket extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBucket(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px", marginBottom: "25px" }}
          placeholder="whatelse do you wanna do...?"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

//PropTypes
AddBucket.propTypes = {
  addBucket: PropTypes.func.isRequired,
};

export default AddBucket;
