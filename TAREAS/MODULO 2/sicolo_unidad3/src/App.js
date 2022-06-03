import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom"
import Public from './Routes/Public';
import Menu from './Components/Menu';

function App() {
  return (
    <Router>
      <Menu/>
      <Public/>
    </Router>
  );
}

export default App;
