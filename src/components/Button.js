import React from "react";

const Button = ({ title, onSubmit, isLoading }) => {
  return (
    <div className="flex justify-center items-center w-[116px] h-[52px] bg-orange-500 mt-4 hover:cursor-pointer" onClick={onSubmit}>
      {isLoading? <p className="text-white">processing...</p>:<p className="text-white">{title}</p>}
    </div>
  );
};

export default Button;
