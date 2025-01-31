import React from "react";

interface MyInputProps {
  handleEvent: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void 
}

const MyInput: React.FC<MyInputProps> = ({handleEvent}) => {
  
  return (
    <>
      <input
        className=" outline-1 "
        type="text"
        onChange={(event) => handleEvent(event.target.value, event)}
        placeholder="Enter anything.." />
    </>
  )
}

export default MyInput