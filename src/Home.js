import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handlePathNavigation = (path) => {
    navigate(path);
  };
  return (
    <>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        maxWidth: "150px", 
        paddingTop: "10px",
        gap: "10px"  // Add this line to create space between buttons
      }}>
        <button onClick={() => handlePathNavigation("/togglebutton")}>
          ToggleButton
        </button>
        <button onClick={() => handlePathNavigation("/formvalidation")}>
          FormValidation
        </button>
         <button onClick={() => handlePathNavigation("/showdataintable")}>
          ShowDataInTable
        </button>
        <button onClick={() => handlePathNavigation("/crudusers")}>
          CrudUsers
        </button>
      
       
      </div>
    </>
  );
}

export default Home;
