import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import IndividualBlogPost from './IndividualBlogPost';
import Projects from './Projects';
import Sidebar from './Sidebar';
import ProjectDetails from './ProjectDetails';
import FourOhFour from './FourOhFour';
import './App.css';

function App() {
  return (
    <div>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:blogSlug" component={IndividualBlogPost} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:project" component={ProjectDetails} />
        <Route exact path="/projects/:project/:projectTab" component={ProjectDetails} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  );
}

export default App;
