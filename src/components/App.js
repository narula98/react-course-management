import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursePage from "./CoursePage";
import PageNotFound from "./PageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about"/>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
