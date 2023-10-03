/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewsCard = ({ card }) => {
  const { title, image_url, details, _id } = card;

  return (
    <div>
      <div className="card mb-16  bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full"
            src={image_url}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}!</h2>
          <div>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200)}
                <Link
                  to={`/news/${_id}`}
                  className="text-blue-600 ml-3 font-bold"
                >
                  Read More
                </Link>
              </p>
            ) : (
              <p> {details}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
