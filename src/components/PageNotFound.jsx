import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white text-2xl font-bold">
      <h1>404 Error</h1>
      <h1>The page you're looking for doesn't Exists!</h1>
      <NavLink to={"/home"} className={"m-4"}>
        Go Home -&gt;
      </NavLink>
    </div>
  );
};

export default PageNotFound;
