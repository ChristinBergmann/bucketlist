import React, { Component } from "react";
import PropTypes from "prop-types";

export class BucketItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#ebc0e5",
      padding: "10px",
      borderBottom: "1px #fff dotted",
      textDecoration: this.props.bucket.completed ? "line-through" : "none",
    };
  };

  markComplete = (e) => {
    console.log(this.props);
  };

  render() {
    const { id, title } = this.props.bucket;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            className="checkbox-style"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {"   "}
          {title}
          <button
            onClick={this.props.delBucket.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
BucketItem.propTypes = {
  bucket: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delBucket: PropTypes.func.isRequired,
};

const btnStyle = {
  backgroundColor: "#b3a4b1",
  color: "#fff",
  float: "right",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
};

export default BucketItem;
