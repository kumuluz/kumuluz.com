import React from "react";
import * as PropTypes from "prop-types";

import "./itemized.component.scss";

export function Itemized(props) {
  const { label, small = false } = props;

  return (
    <div className="itemized-component">
      <div className={small ? "box-container box-container-small" : "box-container"}>
        <span className="box" />
      </div>
      <div className={small ? "content content-small" : "content"}>
        <span>{label}</span>
      </div>
    </div>
  );
}

Itemized.propTypes = {
  trKey: PropTypes.string,
  label: PropTypes.string,
  small: PropTypes.bool,
};
