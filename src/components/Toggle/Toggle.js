import React from "react";
import { useState } from "react";
import './Toggle.css';
import '../Nav/Sidebar';

function Toggle() {
    const [isActive, setIsActive] = useState(false);

    function toggleSidebar() {
      console.log("1")
      setIsActive(!isActive);
    }
  return (
    <div>
  
      </div>
  
  );
}

export default Toggle;
