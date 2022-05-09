import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesApp from './routes/RoutesApp';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesApp />
    </div>
  );
}

export default App;
