import React from 'react';
import Option from "./option"
// class Options extends Component {
//   render() {
//     return (      
//       <div className="Options">
//       <button onClick ={this.props.handleDeleteAll}>Remove All</button>
//       {
//       this.props.options.map((option) =>
//       <Option key = {option} optionText = {option} />)
//       }
      
//       </div>
//     );
//   }
// }

// stateless functional Component:
const Options = (props) => {
      return (      
        <div className="Options">
        <button onClick ={props.handleDeleteAll}>Remove All</button>
        {
        props.options.map((option) =>
        <Option
        handleDeleteOption= {props.handleDeleteOption} 
        key = {option} optionText = {option} 
         />)
        }
        
        </div>
      );
  }
  
  export default Options;