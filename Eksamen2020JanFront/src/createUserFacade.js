import configuration from "./settings";
import { handleHttpErrors, makeOptions } from "./utils";

const URL = configuration.URL;

function CreateUserFacade() {
  const createUser = (user, pass) => {
    const options = makeOptions("POST", false, {
      userName: user,
      userPass: pass
    });
    return fetch(URL + "/api/movie/createUser", options).then(
      handleHttpErrors
    );
  };

  return {
    createUser: createUser
  };
}

let facade = CreateUserFacade();
export default facade;
