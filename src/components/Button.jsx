import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-secondary  hover:bg-gradient-to-r from-pink-500 via-primary to-primary hover:drop-shadow-4xl  p-4 text-white w-full font-medium rounded-lg"
    >
      {children}
    </button>
  );
}

export default Button;
