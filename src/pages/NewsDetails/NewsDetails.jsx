import { useParams } from "react-router-dom";
import Header from "./../shared/Header/Header";
import RightSideNav from "./../shared/RightSideNav/RightSideNav";
import Navbar from './../shared/Navbar/Navbar';

const NewsDetails = () => {

const {id}=useParams()

  return (
    <div>
      <Header />
      <Navbar/>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2>news</h2>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
