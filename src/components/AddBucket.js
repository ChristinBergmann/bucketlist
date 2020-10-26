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
      <form onSubmit={this.onSubmit} style={{ display: "flex", marginBottom: "25px" }}>
        <input
          type="text"
          name="title"
          style={{inputStyles, flex: "10" }}
          placeholder="whatelse do you wanna do...?"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          style={{btnStyles, flex: "1" }}
        />
      </form>
    );
  }
}

//PropTypes
AddBucket.propTypes = {
  addBucket: PropTypes.func.isRequired,
};

const inputStyles = {
  padding: "5px",
  marginBottom: "25px",
};

const btnStyles = {
  cursor: "pointer",
  backgroundColor: "#b3a4b1",
  color: "#fff",
  active: "rgb(247, 4, 186)",
}

export default AddBucket;


