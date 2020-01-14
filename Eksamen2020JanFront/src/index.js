import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import loginFacade from "./loginFacade";
import movieFacade from "./movieFacade";
import createUserFacade from "./createUserFacade";
import "bootstrap/dist/css/bootstrap.min.css";

const AppFacadeTime = () => {
	return (
		<div>
			<App loginFacade={loginFacade} movieFacade={movieFacade} createUserFacade={createUserFacade} />
		</div>
	);
};

ReactDOM.render(<AppFacadeTime />, document.getElementById("root"));
