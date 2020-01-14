import { handleHttpErrors, makeOptions } from "./utils";
import configuration from "./settings";

const movieFacade = (function() {
  function FetchSimpleMov(title) {
    const options = makeOptions("GET", true);
    const us = fetch(
      configuration.URL + "/api/movie/movie-info-simple/" + title,
      options
    ).then(handleHttpErrors);
    console.log(configuration.URL + "/api/movie/movie-info-simple/" + title);
    return us;
  }

  function FetchAllInfMov(title) {
    const options = makeOptions("GET", true);
    const us = fetch(
      configuration.URL + "/api/movie/movie-info-all/" + title,
      options
    ).then(handleHttpErrors);
    console.log(configuration.URL + "/api/movie/movie-info-all/" + title);
    return us;
  }

  function FetchCountMov(title) {
    const options = makeOptions("GET", true);
    const us = fetch(
      configuration.URL + "/api/movie/movie-count/" + title,
      options
    ).then(handleHttpErrors);
    console.log(configuration.URL + "/api/movie/movie-count/" + title);
    return us;
  }
  return {
    FetchCountMov:FetchCountMov,
    FetchSimpleMov: FetchSimpleMov,
    FetchAllInfMov: FetchAllInfMov
  };
})();

export default movieFacade;
