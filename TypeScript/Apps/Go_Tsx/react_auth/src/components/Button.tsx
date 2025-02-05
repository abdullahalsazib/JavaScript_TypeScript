import React from "react";

interface ButtonProps {
  type: string;
  handle?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="border-[2px] border-slate-600 rounded-md px-5 py-2 cursor-pointer hover:bg-sky-200 duration-200 hover:border-sky-200 hover:font-semibold"
      itemType={props.type}
    >
      Button
    </button>
  );
};

export default Button;
