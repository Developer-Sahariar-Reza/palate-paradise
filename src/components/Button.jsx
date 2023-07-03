import React from "react";

const Button = (props) => {
  return (
    <button className="btn hover:duration-500 text-xl text-white font-semibold py-2 px-6 rounded-md block">
      {props.children}
    </button>
  );
};

export default Button;
