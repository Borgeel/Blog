import { Route, Switch } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

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
    <>
      <Header />
      <DataProvider>
        <Search />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={NewPost} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/about" component={About} />
          <Route path="*" component={Missing} />
        </Switch>
      </DataProvider>
      <Footer />
    </>
  );
}

export default App;
