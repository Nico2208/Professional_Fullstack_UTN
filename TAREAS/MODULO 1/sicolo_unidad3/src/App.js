import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  // App es un superior de Home porque App inyecta a Home
  return (
    <div className="App">
      {/* Home esta siendo inyectado por App */}
      {/* Home es un inferior de App porque home esta siendo inyectado por app */}
      <Home/>
    </div>
  );
}

export default App;
