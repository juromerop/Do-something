import React from "react";
import "../styles/CreateToDoButton.css";
import Button from "@mui/material/Button";

function CreateToDoButton(props) {
  const onClickButton = () => {
    alert("Click");
  };
  return(
    <Button 
    variant="contained"
    onClick={onClickButton}
    >
      add 
    </Button>
    ) 
}

export default CreateToDoButton;
