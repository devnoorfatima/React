import React from 'react';
const Project1 = (props) => (
    <div>
    <h3>Project</h3>
    <p>This is my project {props.match.params.id}</p>
    </div>
  );

  export default Project1;