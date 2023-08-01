import React from "react";
import "./Button.css";

const Button = ({
  background,
  textColor,
  btnName,
  size,
  handleClick,
}: {
  background: string;
  textColor: string;
  btnName: string;
  size: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      className={`${background} ${textColor} button-${size} shadow-md rounded-lg dark:bg-red-600 dark:text-white`}
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
