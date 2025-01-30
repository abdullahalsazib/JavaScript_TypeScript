import { useState } from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLogedIn: boolean;
};
function Greet(props: GreetProps) {
  const {messageCount = 0} = props
  const [signout, setSignOut] = useState(props.isLogedIn);
  const handleSignOut = () => {
    setSignOut(!signout);
  };
  return (
    <>
      <div className=" flex items-center flex-col gap-5 justify-center w-full h-screen text-5xl">
        {signout ? (
          <h1>
            Welcome {props.name}! you have {messageCount} unread messages
            😸
          </h1>
        ) : (
            <h1>User is not loged in 👎 Welcome Guest ❔</h1>
        )}
        <button
          onClick={handleSignOut}
          className="py-2 px-5 text-2xl cursor-pointer bg-purple-300 text-black rounded-3xl">
          {signout ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </>
  );
}

export default Greet;
