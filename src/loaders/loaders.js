// use local storage to manage cart data
const addToDb = (id) => {
  let jobCart = getJobCart()
 
  const apply = jobCart[id];
  if (!apply) {
    jobCart[id] = 1;
  } else {
    const newApply = apply + 1;
    jobCart[id] = newApply;
  }
  localStorage.setItem("job-cart", JSON.stringify(jobCart));
};

const getJobCart = () => {
  let jobCart = {};

  //get the job cart from local storage
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    jobCart = JSON.parse(storedCart);
  }
  return jobCart;
};

export { addToDb, getJobCart };