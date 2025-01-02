import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';
import Contact from './contact';
import Siddharth from './siddharth';

const App = () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/siddharth" component={Siddharth} />
      </Switch>
    </main>
    <Footer />
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);