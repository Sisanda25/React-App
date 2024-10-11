import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to My Single Page Application</h1>
        <switch>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={About}/>
          <Route path="/" exact component={Profile}/>
        </switch>
      </div>
    </Router>
  )
}

export default App;





