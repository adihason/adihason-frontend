import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Uploader from '../components/Uploader'
import Search from '../components/Search';
import Album from '../components/Album';

function AppRouter() {
  return (
    <Router>
      <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
          <Link to="/"><span className="link dim white dib mr3">Album</span></Link>
          <Link to="/upload/"><span className="link dim white dib mr3">Upload</span></Link>
          <Link to="/search/"><span className="link dim white dib mr3">Search</span></Link>
        </nav>
      </header>

      <Route path="/" exact component={Album} />
      <Route path="/upload/" component={Uploader} />
      <Route path="/search/" component={Search} />

    </Router >
  );
}

export default AppRouter;