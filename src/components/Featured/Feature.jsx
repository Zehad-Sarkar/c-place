import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Feature = ({ feature, handleApplyNow }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    fulltimeOrParttime,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    contactInformation,
  } = feature;

  // console.log(id)

  const { phone, email } = contactInformation;

  return (
    <div className="m-4 border-blue-600 shadow-md card">
      <img className="w-48 h-16 mb-2 rounded-md" src={companyLogo} alt="" />
      <h4 className="text-2xl font-medium">{jobTitle}</h4>
      <p>{companyName}</p>
      <div className="flex items-center gap-6 mt-2">
        <p className="p-1 mb-2 border-2 border-blue-400">{remoteOrOnsite}</p>
        <p className="p-1 border-2 border-blue-400">{fulltimeOrParttime}</p>
      </div>
      <div className="flex gap-6">
        <p className="flex items-center justify-center">
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          }
          {location}
        </p>
        <p className="flex items-center justify-center">
          {<CurrencyDollarIcon className="w-6 h-6 text-blue-500" />}
          {salary}
        </p>
      </div>
      <Link to={`/details/${id}`}>
        <button className="mt-4 btn-primary">View Details</button>
      </Link>
    </div>
  );
};

export default Feature;
