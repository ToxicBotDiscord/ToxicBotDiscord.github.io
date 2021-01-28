import './App.css';
import CommandsTable from "./components/CommandsTable";
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import ReportIssue from './components/ReportIssue';
// import NewUpdate from './components/NewUpdate';

function App() {

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
