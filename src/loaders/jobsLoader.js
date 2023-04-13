import { getJobCart } from "./loaders";


const jobsLoader = async () => {
  const jobLoader = await fetch("https://raw.githubusercontent.com/Zehad-Sarkar/feature/main/feature.json")
  const jobs = await jobLoader.json();

  const storedCart = getJobCart()
  let savedJob = [];
  for (const id in storedCart) {
    const addedJob = jobs.find((jc) => jc.id === parseInt(id));
    if (addedJob) {
      const apply = storedCart[id];
      addedJob.apply = apply;
      savedJob.push(addedJob);
    }
  }
  // console.log(savedJob);
  // console.log(storedCart,jobs);

  return savedJob;
};

export default jobsLoader ;
