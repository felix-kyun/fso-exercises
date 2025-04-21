import { useEffect } from "react";
import { useSelector } from "react-redux";
import { reset } from "../reducers/notificationSlice.mjs";
import { useDispatch } from "react-redux";

export const Notification = () => {
  const notification = useSelector((store) => store.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(reset()), 5000);
  }, [notification, dispatch]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  return notification === "" ? "" : <div style={style}>{notification}</div>;
};
