// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Alert from '@mui/material/Alert';

import WeatherApp from "./WeatherApp"

function App() {
//   let handleClick = () => {
//     console.log("button was clicked");
//   }

  return (
    <>
    {
    /* <h1>Material UI</h1>
      <Button variant="contained" 
      onClick={handleClick} 
      color="success" 
      size="small"
      startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <br/><br/>
      <Alert severity="warning">Delete button is available!!</Alert>
      <br/><br/>
      <Button variant="contained" onClick={handleClick} disabled>Upload</Button>
      <br/><br/>
      <Alert severity="info">Upload button is disabled as you are not authorized user!!</Alert> */}

      {/* ------------------------ React Weather Project Code------------------------- */}
      {/* <SearchBox/>
      <InfoBox/> */}
      <WeatherApp/>
    </>
  )
}

export default App
