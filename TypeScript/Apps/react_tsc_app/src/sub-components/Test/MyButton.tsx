import React from "react";

type MyButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id?: number) => void;
  styles?: string;
  title: string;
}
function MyButton({handleClick, styles, title}: MyButtonProps) {
  return (
    <button  onClick={(event) => handleClick(event, 1)} className={`py-3 px-3 font-serif cursor-pointer capitalize ${styles}`}>{ title }</button>
  )
}

export default MyButton