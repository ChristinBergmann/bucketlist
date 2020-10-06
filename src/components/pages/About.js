import React from "react";

function About() {
  return (
    <React.Fragment>
      <div style={containerStyle}>
        <h1>About</h1>
        <p>
          This is the bucket list app v.1.0. It is part of a react crash course
          by 'Traversy Media'.
        </p>
        <p>Created by Christin || 2020</p>
      </div>
    </React.Fragment>
  );
}

const containerStyle = {
  paddingTop: "20px",
  textAlign: "center",
};

export default About;
