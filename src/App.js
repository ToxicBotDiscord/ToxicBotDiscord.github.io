import './App.css';
import CommandsTable from "./components/CommandsTable";
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import ReportIssue from './components/ReportIssue';
import { useSnackbar } from 'notistack';
import React, {useEffect} from 'react';
// import NewUpdate from './components/NewUpdate';

function App() {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const dontShowSnackbar = (key) =>{
        localStorage.setItem("dontShow18PlusTB", true);
        closeSnackbar(key);
    }

    const action = key => (
      <React.Fragment>
        <>
        <div onClick={() => { window.history.back(); }} style={{background:"transparent", border:"none", cursor:"pointer", color:"blue", paddingRight:"8px", textDecoration:"underline", fontWeight:"bolder" }}>
          Leave
        </div>
        <div onClick={() => { dontShowSnackbar(key) }} style={{background:"transparent", border:"none", cursor:"pointer", color:"blue", paddingRight:"8px", textDecoration:"underline", fontWeight:"bolder" }}>
          Dont show again
        </div>
        <div onClick={() => { closeSnackbar(key) }} style={{background:"transparent", border:"none", cursor:"pointer", color:"blue", textDecoration:"underline", fontWeight:"bolder" }}>
          Dismiss
        </div>
        </>
      </React.Fragment>
    );

    useEffect(() => {
      if(!localStorage.getItem("dontShow18PlusTB")){
          enqueueSnackbar("This website contains explicit language, user discretion is advised.", {
              variant: 'error',
              autoHideDuration: 5000,
              action,
          });
      }
    })

  return (
    <div >
      <Home />
      {/* <NewUpdate /> */}
      <CommandsTable />
      <AboutUs />
      <ReportIssue />

    </div>
  );
}

export default App;
