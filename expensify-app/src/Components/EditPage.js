import React from 'react';
const EditPage = (props) => {
  console.log(props); 
  return (
    <div>
    Editing the id with an expense of{props.match.params.id}
  </div>
  );
   };
  export default EditPage;