import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="items-center justify-between mb-16 md:flex">
      <div className="mb-4">
        <Link to="/">
          <h2 className="text-3xl font-bold">Career Hub</h2>
        </Link>
      </div>

      <div className="items-center md:justify-between md:flex">
        <div className="flex flex-col md:flex-row">
          <Link to="/" className="mr-4 text-base font-bold md:mr-8">
            Home
          </Link>

          <Link to="/statistic" className="mr-4 text-base font-bold md:mr-8">
            Statistic
          </Link>

          <Link to="/appliedjobs" className="mr-4 text-base font-bold md:mr-8">
            Applied Jobs
          </Link>

          <Link to="/blog" className="mr-4 text-base font-bold md:mr-8">
            Blog
          </Link>
        </div>
        <div className="mt-2">
          <button className="btn-primary">Star Applying</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
