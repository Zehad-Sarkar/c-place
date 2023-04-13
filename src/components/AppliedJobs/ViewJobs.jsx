import React from "react";
import {
  CurrencyDollarIcon,
  BriefcaseIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ViewJobs = ({ job }) => {
  return (
    <div className="gap-3 p-4 m-4 mt-8 border-2 rounded-md md:flex">
      <img className="w-40 mb-2 rounded-md" src={job.companyLogo} alt="" />
      <div className="items-center justify-between grid-cols-2 md:gap-96 md:grid">
        <div className="">
          <h2 className="text-2xl font-medium">{job.jobTitle}</h2>
          <h4>{job.companyName}</h4>
          <div className="flex gap-4 mt-2">
            <p className="px-3 border-2 border-blue-400">
              {job.remoteOrOnsite}
            </p>
            <p className="px-3 border-2 border-blue-400">
              {job.fulltimeOrParttime}
            </p>
          </div>
          <div className="flex gap-4 mt-2">
            <p className="flex items-center gap-1">
              <span>{<MapPinIcon className="w-6 h-6 text-blue-500" />}</span>
              {job.location}
            </p>
            <p className="flex items-center gap-1">
              <span>
                {<CurrencyDollarIcon className="w-6 h-6 text-blue-500" />}
              </span>
              {job.salary}
            </p>
          </div>
        </div>
        <div className="">
          <Link to={`/details/${job.id}`}>
            <button className="mt-2 btn-primary">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewJobs;
