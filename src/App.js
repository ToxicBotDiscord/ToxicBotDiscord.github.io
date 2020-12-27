import './App.css';
import CommandsTable from "./components/CommandsTable";
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import ReportIssue from './components/ReportIssue';

function App() {

  return (
    <div >
      {/* <Navbar /> */}
      <Home />
      
      <CommandsTable />
      <AboutUs />
      <ReportIssue />

    </div>
  );
}

export default App;
