import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hero from '../pages/Hero.jsx';
import HeroesProfile from '../pages/HeroesProfile.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/heroes">heroes</Link>
            </li>
            <li>
              <Link to="/heroes-profile">heroes-profile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/heroes">
            <Hero />
          </Route>
          <Route path="/heroes-profile">
            <HeroesProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}