import logo from './logo.svg';
import './App.css';
import { Accordian } from './components/Accordian';
import FetchData from './components/api/FetchData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Accordian/> */}
        <FetchData/>
      </header>
    </div>
  );
}

export default App;
