import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import LeftSideNav from "./../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "./../shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="grid lg:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>

        <div>
          <h2 className="text-4xl">News</h2>
        </div>

        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
