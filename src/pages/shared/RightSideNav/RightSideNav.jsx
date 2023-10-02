import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineGoogle,
} from "react-icons/ai";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <AiOutlineGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <AiFillGithub />
          Github
        </button>
      </div>

      <div className="p-4  mb-6">
        <h2 className="text-3xl mb-3">Find Us On</h2>
        <a
          className="p-4 flex  items-center gap-3 text-lg border rounded-t-lg"
          href=""
        >
          <AiFillFacebook />
          Facebook
        </a>
        <a
          className="p-4 flex items-center gap-3 text-lg border-x"
          href=""
        >
          <AiFillInstagram />
          Instagram
        </a>
        <a
          className="p-4 flex items-center gap-3 text-lg border rounded-b-lg"
          href=""
        >
          <AiFillTwitterCircle />
          Twitter
        </a>
      </div>

      {/* q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img
          src={qZone1}
          alt=""
        />
        <img
          src={qZone2}
          alt=""
        />
        <img
          src={qZone3}
          alt=""
        />
      </div>
    </div>
  );
};

export default RightSideNav;
