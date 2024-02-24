import React,{useState} from 'react'
import './AlertPopup.css'
import Alert from '@mui/material/Alert';

const AlertPopup = (props) => {
    const [showAlert, setShowAlert] = useState(true);
    function closePopup() {
        var popup = document.getElementById("alert");
       setShowAlert(popup.style.display = "none");
      }
  return (
    showAlert && (
        <div id='alert'>
        <Alert severity="error" color='warning' 
        onClose={() =>closePopup()}>
           {props.message}
      </Alert>
      </div>
    )
  )
}

export default AlertPopup
