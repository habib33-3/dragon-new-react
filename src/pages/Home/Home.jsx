import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "./../shared/RightSideNav/RightSideNav";
import LeftSideNav from "./../shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
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
          <h2 className="text-4xl text-center">News</h2>
        </div>

        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
