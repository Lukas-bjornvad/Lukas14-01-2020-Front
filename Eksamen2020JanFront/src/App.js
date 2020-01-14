import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn";
import Header from "./components/Header";
import CreateUserPage from "./components/CreateUserPage";
import MoviePage from "./components/MoviePage";
import StartPage from "./components/Home";
import AdminPage from "./components/AdminPage";
/* import uuid from "uuid/v1"; */

const NoMatch = () => {
  return <h3>The page was not found.</h3>;
};

function App({ loginFacade, movieFacade, createUserFacade }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [movInfo, setMovInfo] = useState(null);
  const [movTitle, setMovTitle] = useState("");

  // check token regularly
  useEffect(() => {
    /* loginFacade.logout(); */
    const interval = setInterval(() => {
      setLoggedIn(loginFacade.loggedIn());
    }, 10000);
    setLoggedIn(loginFacade.loggedIn());
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Header loggedIn={loggedIn} movTitle={movTitle} />
      <Switch>
        <Route path="/home">
          <StartPage
            movieFacade={movieFacade}
            loggedIn={loggedIn}
            movInfo={movInfo}
            setMovInfo={setMovInfo}
            movTitle={movTitle}
            setMovTitle={setMovTitle}
          />
        </Route>
        <Route path="/createUser">
          <CreateUserPage factory={createUserFacade} />
        </Route>
        <Route path="/login">
          <LogIn
            apiFacade={loginFacade}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            movieFacade={movieFacade}
            admin = {admin}
            setAdmin = {setAdmin}
          />
        </Route>
        <Route path="/movie">
          <MoviePage
            movieFacade={movieFacade}
            loggedIn={loggedIn}
            movInfo={movInfo}
            setMovInfo={setMovInfo}
            movTitle={movTitle}
            setMovTitle={setMovTitle}
          /> </Route>
          <Route path="/admin">
            <AdminPage
            admin={admin}
            movieFacade={movieFacade}
            loggedIn={loggedIn}
            movInfo={movInfo}
            setMovInfo={setMovInfo}
            movTitle={movTitle}
            setMovTitle={setMovTitle}
            ></AdminPage>
          </Route>
       
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
