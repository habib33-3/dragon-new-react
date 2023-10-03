import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "./../shared/RightSideNav/RightSideNav";
import LeftSideNav from "./../shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>

        <div className=" lg:col-span-2">
          {news.map((card) => (
            <NewsCard
              card={card}
              key={card._id}
            />
          ))}
        </div>

        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
