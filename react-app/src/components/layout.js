import React from 'react'

function Header (){
   return(
       <header style={headerStyle}>
        <h1>TodoList</h1>
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