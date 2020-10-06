import React, { Component } from "react";
import BucketItem from "./BucketItem";
import PropTypes from "prop-types";

class Buckets extends Component {
  render() {
    return this.props.buckets.map((bucket) => (
      <BucketItem
        key={bucket.id}
        bucket={bucket}
        markComplete={this.props.markComplete}
        delBucket={this.props.delBucket}
      />
    ));
  }
}

//PropTypes
Buckets.propTypes = {
  buckets: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delBucket: PropTypes.func.isRequired,
};

export default Buckets;
