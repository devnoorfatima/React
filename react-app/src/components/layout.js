import React from 'react'
import {Link} from 'react-router-dom';
function Header (){
   return(
       <header style={headerStyle}>
        <h1>TodoList</h1>
        <Link to='/' className='link' >Home</Link> | <Link className='link' to='/About'>About</Link>
       </header>
   )
}

const headerStyle = {
    textAlign:'center',
    background:'#003166',
    color:'white',
    padding:'5px',
    fontSize:'20px',
    borderRadius:'5px'
}

export default Header;