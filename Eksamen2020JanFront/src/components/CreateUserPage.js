import React, { useState } from "react";
import { Prompt } from "react-router-dom";

const CreateUserPage = ({ factory }) => {
  const emptyUser = { userName: "", userPass: "" };
  const [user, setUser] = useState({ ...emptyUser });
  let [isBlocking, setIsBlocking] = useState(false);

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.id;
    setUser({ ...user, [name]: value });
    setIsBlocking(true);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    //if(user.userName !== "" || user.userPass !== "") {
    factory.createUser(user.userName, user.userPass);
    //}
    setUser({ ...emptyUser });
    event.target.reset();
    setIsBlocking(false);
  }

  return (
    <div>
      <h2>Create a User</h2>
      <form
        className="form-horizontal"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <div className="form-group">
          <div className="col-sm-9">
            <input
              className="form-control"
              id="userName"
              placeholder="Enter User Name"
              defaultValue={user.userName}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-9">
            <input
              className="form-control"
              id="userPass"
              placeholder="Enter Password"
              defaultValue={user.userPass}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUserPage;
