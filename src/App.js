import { Route, Switch, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFatch from "./hooks/useAxiosFetch";
import { DataProvider } from "./context/DataContext";

import api from "./api/posts";

import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Search from "./Search";
import Edit from "./Edit";

function App() {
  return (
    <DataProvider>
      <Header />
      <Search />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={NewPost} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </DataProvider>
  );
}

export default App;
