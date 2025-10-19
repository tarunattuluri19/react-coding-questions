import React, { useState } from 'react'

function ToggleButton() {
    const [toggle,setToggle]=useState(true);
    const handleToggleChange=()=>{
        setToggle(!toggle)
    }
  return (<>
    <h2>Toggle Button Component</h2>
    <p>
        {toggle ? "Tarun" :"Pavan"}
    </p>
    <button onClick={handleToggleChange}>
        Click to change
    </button>
    
  </>
  )
}

export default ToggleButton