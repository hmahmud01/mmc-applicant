import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import RouterSwitch from './components/RouterSwitch';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <Router>
        <SideNav />
        <RouterSwitch />
      </Router>  
    </div>
  );
}

export default App;
