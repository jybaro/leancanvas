import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar form={props.form} />
      {props.children}
    </React.Fragment>
  );
}
export default Layout;
