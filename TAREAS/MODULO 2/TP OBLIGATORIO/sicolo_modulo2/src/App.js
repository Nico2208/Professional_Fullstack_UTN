import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Components/Menu';
import Public from './Routes/Public';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import AuthProvider from './Context/AuthProvider';

function App() {
  const [login, setLogin] = useState (false)
  return (
    <Router>
      <AuthProvider>
        <Menu login={login}/>
        <Container>
          <Public setLogin={setLogin}/>
          </Container>
      </AuthProvider>
    </Router>
    
  );
}

export default App;
