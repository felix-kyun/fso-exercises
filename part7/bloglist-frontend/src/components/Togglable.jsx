import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const Togglable = forwardRef(
  ({ children, buttonLabel, initialVisible, invisibleButtonLabel }, refs) => {
    const [visible, setVisible] = useState(initialVisible ?? false);

    const hideWhenVisible = { display: visible ? "none" : "" };
    const showWhenVisible = { display: visible ? "" : "none" };

    const toggleVisibility = () => {
      setVisible(!visible);
    };

    useImperativeHandle(refs, () => {
      return {
        toggleVisibility,
      };
    });

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={toggleVisibility}>{buttonLabel ?? "Show"}</button>
        </div>
        <div style={showWhenVisible} className="togglableContent">
          {children}
          <button onClick={toggleVisibility}>
            {invisibleButtonLabel ?? "Cancel"}
          </button>
        </div>
      </div>
    );
  },
);

Togglable.displayName = "Togglable";

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
