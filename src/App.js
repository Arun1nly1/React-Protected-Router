import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import AppLayout from './components/AppLayout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
    <ProtectedRoute exact path ='/app'  component={AppLayout} />
    <Route exact path ='/'  component={LandingPage} />
    <Route path ='*'  component={()=>"404 not found"} />
    
      </Switch>
      </div>
    </Router>
  );
}

export default App;
