import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-2xl">All Categories</h2>
        <div className="space-y-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              className="block ml-4 text-xl font-semibold"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
