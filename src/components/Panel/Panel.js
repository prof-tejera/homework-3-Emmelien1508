import React from "react";

const Panel = (props) => {
  return <div className={props.active ? "active" : ""}>{props.children}</div>;
};

export default Panel;
