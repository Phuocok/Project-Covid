
import React from "react";
import "./box.css";

export const Box = (props) => {
  const { type, count, title } = props;
  const getClassName = () => {
    switch (type) {
      case "confirmed":
        return "#BD2130";
      case "recovered":
        return "#A4C939";
      case "death":
        return "#414141";
      default:
        return "";
    }
  };
  const className = getClassName();
  return (
    <div className="box-wrapper">
      <div className="row">
        <p>{title}</p>
        <div className="col">
          <p
            style={{
              backgroundColor: className,
            }}
          >
            {count}
          </p>
        </div>
      </div>
    </div>
  );
};
