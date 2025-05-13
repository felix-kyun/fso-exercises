import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

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
          <Button onClick={toggleVisibility} variant="outlined" color="info">
            {buttonLabel ?? "Show"}
          </Button>
        </div>
        <div style={showWhenVisible} className="togglableContent">
          {children}
          <Button onClick={toggleVisibility} variant="outlined" color="info">
            {invisibleButtonLabel ?? "Cancel"}
          </Button>
        </div>
      </div>
    );
  },
);

Togglable.displayName = "Togglable";

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
