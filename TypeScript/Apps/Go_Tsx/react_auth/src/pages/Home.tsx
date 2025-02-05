export const Home = (props: { name: string }) => {
  return (
    <>
      <div className="text-center text-3xl capitalize font-semibold py-10 text-purple-900 w-full h-screen flex items-center justify-center ">
        {props.name ? "Hi " + props.name : "your not logged in"}
      </div>
    </>
  );
};
