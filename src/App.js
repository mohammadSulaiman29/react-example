import logo from './logo.svg';
import './App.css';
import {Greet , Greet1} from './components/Greet';
import Welcome from './components/Welcome.js';
function App() {
  return (
    <div className="App">
      <Greet/>
      <Greet1/>
      <Welcome/>
    </div>
  );
}

export default App;
