import React from "react";

import { H1, H2, H4 } from "./typography.styles";

const H = props => {
  return (
    <>
      {props.size === "big" ? (
        <H1>
          {props.text} {props.children}
        </H1>
      ) : props.size === "medium" ? (
        <H2>
          {props.text} {props.children}
        </H2>
      ) : props.size === "small" ? (
        <H4>
          {props.text} {props.children}
        </H4>
      ) : null}
    </>
  );
};

export default H;
