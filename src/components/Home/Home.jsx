import React from "react";
import CategoryData from "../Category/CategoryData";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <>
      <div className="md:flex">
        <div className="">
          <h1 className="text-4xl md:text-7xl">
            One Step Closer To Your <span className="djob">Dream Job</span>
          </h1>
          <p className="mt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="mt-4 btn-primary">Get Started</button>
        </div>
        <div className="">
          <img
            className="w-full"
            src="https://www.linkpicture.com/q/person_3.png"
            alt=""
          />
        </div>
      </div>
      <Category></Category>
      <Featured></Featured>
    </>
  );
};

export default Home;
