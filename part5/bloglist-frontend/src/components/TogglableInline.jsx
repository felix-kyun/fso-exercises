import { useState } from "react";

export function TogglableInline({
  children,
  buttonLabel = "Cancel",
  initialVisible = false,
  invisibleButtonLabel = "Show",
}) {
  const [visible, setVisible] = useState(initialVisible ?? false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <span style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </span>
      <span style={showWhenVisible}>
        <br />
        {children}
        <button onClick={toggleVisibility}>{invisibleButtonLabel}</button>
      </span>
    </>
  );
}
