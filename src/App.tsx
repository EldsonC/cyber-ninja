import React from 'react';
import GlobalStyle from "./styles/global"

import {BrowserRouter as Router} from "react-router-dom"
import Routers from './routes/routes';
import Header from './components/topbar';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routers/>
    </Router>
  );
}

export default App;
