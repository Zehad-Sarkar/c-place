import {
  CurrencyDollarIcon,
  BriefcaseIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../loaders/loaders";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const loadJobs = useLoaderData();
  const [applyJob, setApplyJob] = useState([]);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/Zehad-Sarkar/feature/main/feature.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((job) => job.id === parseInt(id));
        setJob(job);
      });
  }, [id]);

  // apply now event handler
  const handleApplyNow = (jobs) => {
    let newApply = [];
    const addedCart = loadJobs.find((jc) => jc.id === jobs.id);
    if (!addedCart) {
      jobs.apply = 1;
      newApply = [...applyJob, jobs];
    } else {
      addedCart.apply = addedCart.apply + 1;
      const remaining = loadJobs.filter((jc) => jc.id !== jobs.id);
      newApply = [...remaining, addedCart];
    }
    setApplyJob(newApply);
    addToDb(jobs.id);
  };

  return (
    <div className="grid gap-4 mt-12 md:grid-cols-3">
      <div className="col-span-2 shadow-md card">
        <h2 className="mb-2">
          <span className="mr-1 text-xl font-medium"> Job Description:</span>
          {job.jobDescription}
        </h2>
        <h2 className="mb-2">
          <span className="mr-1 text-xl font-medium"> Job Responsibility:</span>
          {job.jobResponsibility}
        </h2>
        <h2 className="mb-2">
          <span className="mr-1 text-xl font-medium">
            Education Requirment:
          </span>
          {job.educationalRequirements}
        </h2>
        <h2 className="mb-2">
          <span className="mr-1 text-xl font-medium"> Experience:</span>
          <br />
          {job.experiences}
        </h2>
      </div>
      <div>
        <div className="col-span-1 p-4 details-card">
          <h1 className="mb-2 text-xl">Job Details</h1>
          <div className="flex items-center justify-start mb-2">
            {<CurrencyDollarIcon className="w-6 h-6 text-blue-500" />}
            <p>
              <span className="font-medium">salary:</span> {job.salary}
            </p>
          </div>
          <div className="flex items-center justify-start mb-2">
            {<BriefcaseIcon className="w-6 h-6 text-blue-500" />}
            <p>
              <span className="font-medium">Job Title:</span> {job.jobTitle}
            </p>
          </div>
          <h1 className="text-lg">Contact Information</h1>
          <div className="flex items-center justify-start mb-2">
            {<PhoneIcon className="w-6 h-6 text-blue-500" />}
            {job.phone}
          </div>
          <div className="flex items-center justify-start mb-2">
            {<EnvelopeIcon className="w-6 h-6 text-blue-500" />}
            <p>
              <span className="font-medium">Email:</span>
              {job.email}
            </p>
          </div>
          <div className="flex items-center justify-start mb-2">
            {<MapPinIcon className="w-6 h-6 text-blue-500" />}
            <p>
              <span className="mr-2 font-medium">Address:</span>
              {job.location}
            </p>
          </div>
        </div>

        {/* apply now button */}
        <button
          onClick={() => handleApplyNow(job)}
          className="w-full mt-2 btn-primary"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
