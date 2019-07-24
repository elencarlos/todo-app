import React from "react";
import Routes from "./routes";
import Menu from "./components/menu";

export default props => {
  return (
    <React.Fragment>
      <Menu />
      <Routes />
    </React.Fragment>
  );
};
