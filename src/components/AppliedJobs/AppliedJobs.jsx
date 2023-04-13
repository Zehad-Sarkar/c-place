import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ViewJobs from "./ViewJobs";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [allJobs, setAllJobs] = useState(jobs);
  const [newJobs, setNewJobs] = useState(jobs);


  // filter by event handler
  const filterHandler = (event) => {
    const target = event.target.value;
    if (target) {
      const filterJob = allJobs.filter(
        (job) =>
          job.remoteOrOnsite == target || job.fulltimeOrParttime == target
      );

      setNewJobs(filterJob);
    } else {
      setNewJobs(newJobs);
    }
  };


  return (
    <>
      <h1 className="text-2xl font-bold text-center">Applied Job</h1>
      <div>
        <div className="px-12 mb-5 pt-7 text-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="m-1 btn">
              Filter By
            </label>
            <select
              onChange={filterHandler}
              tabIndex={0}
              className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
            >
              <option>Onsite</option>
              <option>Remote</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-8">
        {newJobs.map((job) => (
          <ViewJobs job={job} key={job.id}></ViewJobs>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
