// for development:
//const URL = "http://localhost:8080/eksamen2020jan";
// actual deployed backend:
const URL = "https://www.lukasbjornvad.dk/Eksamen2020Jan";

const configuration = (function() {
  return {
    URL: URL
  };
})();

export default configuration;

/*
  Add configuration constants
  Return them as objects
  import configuration from "./settings";
  Const URL = configuration.URL;
*/
