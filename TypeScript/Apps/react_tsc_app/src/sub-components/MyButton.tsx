import React from "react";


type MyButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id?: number) => void;
  styles: React.CSSProperties
}
function MyButton({handleClick, styles}: MyButtonProps) {
  return (
    <button style={styles} onClick={(event)=> handleClick(event, 1)} className="py-3 px-3 font-serif">MyButton</button>
  )
}

export default MyButton