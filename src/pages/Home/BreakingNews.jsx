import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee
        pauseOnHover
        speed={100}
      >
        <Link
          className="mr-12"
          to="/"
        >
          Lorem ipsum dolor sit .......
        </Link>
        <Link
          className="mr-12"
          to="/"
        >
          Lorem ipsum dolor sit .......
        </Link>
        <Link
          className="mr-12"
          to="/"
        >
          Lorem ipsum dolor sit .......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
