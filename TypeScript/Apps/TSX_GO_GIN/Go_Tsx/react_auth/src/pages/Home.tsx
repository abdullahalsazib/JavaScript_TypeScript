import React from "react";

interface HomeProps {
  name: string;
}

export const Home: React.FC<HomeProps> = (props) => {
  return (
    <>
      <div className="text-center text-3xl capitalize font-semibold py-10 text-purple-900 w-full h-screen flex items-center justify-center ">
        {/* {props.name ? "Hi " + props.name : "your not logged in"} */}
        <h1> {props.name ? "Hi " + props.name : "User is not logged in"} </h1>
      </div>
    </>
  );
};
