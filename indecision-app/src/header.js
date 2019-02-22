import React from 'react';

// class Header extends Component {
  //   render() {
       
  //       return (      
  //       <div className="Header">
  //       <h1>{this.props.title}</h1>
  //          <h2>{this.props.subtitle}</h2>
  //       </div>
  //     );
  //   }
  // }


const Header= (props) => {
      return (      
      <div className="Header">
      <h1>{props.title}</h1>
         {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
};
 Header.defaultProps = {
 title : "Indecision"
 };  
  export default Header;