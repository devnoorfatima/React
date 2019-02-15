import React, { Component } from 'react';
class Form extends Component {
    render() {  
    const user = {
      title: "Indecision App",
      subtitle: "Enjoy your life with computer",
      options: ["one", "two"]
    };
    const onFormSubmit = (e) => {
      e.preventDefault();

       const option = e.target.elements.option.value;

       if(option){
         user.options.push(option);
         e.target.elements.option.value = "";
         console.log(user.options);
       }
    };
    const onRemoveAll = () => {
     user.options = [];
    };
      return (      
        <div className="form">
        <h1>{user.title}</h1>
        {user.subtitle && <p>{user.subtitle}</p>}        
        <p>{user.options.length > 0 ? "Here are your options" : "No options"}</p>
        <p>{user.options.length}</p>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
          <li>Item one</li>
          <li>Item two</li>
        </ol>
        <form onSubmit = {onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
        </div>
      );
    }
  }
  export default Form;