import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './stylesheets/App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
