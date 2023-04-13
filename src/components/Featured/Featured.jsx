import React, { useEffect, useState } from "react";
import Feature from "./Feature";
import { Link } from "react-router-dom";

const Featured = () => {
  const [features, setFeatures] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Zehad-Sarkar/feature/main/feature.json"
    )
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  //see all button event handler
  const handleSeeAll = () => {
    setShowAll(true);
  };

  const displayFeatures = showAll ? features : features.slice(0, 4);

  return (
    <div className="mt-28">
      <h1 className="text-4xl font-bold text-center md:font-extrabold md:text-7xl">Featured Jobs</h1>
      <p className="mt-6 font-medium text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 ">
        {displayFeatures.map((feature) => (
          <Feature
            feature={feature}
            key={feature.id}
            
          ></Feature>
        ))}
      </div>

      <div className="">
        {!showAll && (
          <button
            className="block mx-auto my-4 btn-primary"
            onClick={handleSeeAll}
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default Featured;
