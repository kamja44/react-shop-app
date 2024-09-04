import React from "react";
import styles from "./Divider.module.scss";
const Divider = ({
  space = 22,
  color = "#ccc",
  className = "",
  ...restProps
}) => {
  const style = {
    marginTop: space,
    marginBottom: space,
    background: color,
  };
  return (
    <div
      role="presentation"
      className={styles.line}
      style={style}
      {...restProps}
    />
  );
};

export default Divider;
