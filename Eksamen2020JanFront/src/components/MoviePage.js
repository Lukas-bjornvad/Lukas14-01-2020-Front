import React, { useState, useEffect } from "react";
import utils, { catchHttpErrors } from "../utils";
import {
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
  Prompt
} from "react-router-dom";

const MoviePage = ({
  loggedIn,
  movieFacade,
  movInfo,
  setMovInfo,
  movTitle,
  setMovTitle
}) => {
  const match = useRouteMatch();

  const handleChange = evt => {
    const target = evt.target;
    const value = target.value;
    setMovInfo(value);
  };

  if (!loggedIn) {
    return <Redirect to={"/loggedOut"} />;
  } else {
    return (
      <div>
        <br />
        <form onChange={handleChange}>
          <input
            id="title"
            placeholder="Enter title"
          />
          <Link to={`${match.url}/${movInfo}`}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Link>
        </form>

        <Route path={`${match.path}/:movTitle`}>
          <PersonTables
            movieFacade={movieFacade}
            movInfo={movInfo}
            setMovInfo={setMovInfo}
          />
        </Route>
      </div>
    );
  }
};

const PersonTables = ({ movieFacade, movInfo, setMovInfo }) => {
  let { movTitle } = useParams();

  useEffect(() => {
    movieFacade
      .FetchAllInfMov(movTitle)
  .then(data => setMovInfo(<p>{JSON.stringify(data)}</p>))
      .catch(catchHttpErrors);
  }, [movTitle]);

  return (
    <div>
      <hr />
      {movInfo}
    </div>
  );
};

export default MoviePage;
