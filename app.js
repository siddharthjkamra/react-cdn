import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './template/header';
import Footer from './template/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Siddharth from './pages/siddharth';
import NotFound from './notfound';

const App = () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/siddharth" component={Siddharth} />
        <Route component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);