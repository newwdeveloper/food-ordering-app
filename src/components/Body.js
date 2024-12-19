import RestrCard, { WithPromottedLable } from "./RestrCard";
import restaurantData from "../utils/restaurantData.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState(restaurantData);
  const [filteredData, setFilteredData] = useState(restaurantData);

  const [searchText, setSearchText] = useState("");

  const RestraCardPromoted = WithPromottedLable(RestrCard);

  /*useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
  };*/
  return (
    <div className="card-container">
      <div className="filterBtn">
        <div className="search">
          <input
            type="text"
            className="input-box"
            placeholder="search here...."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value.trim() === "") {
                setFilteredData(restaurantData);
              }
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredSearch = listOfRestraunt.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredData(filteredSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            const filteredRestaurants = listOfRestraunt.filter(
              (res) => res.rating > 4.2
            );
            setListOfRestraunt(filteredRestaurants);
            setFilteredData(filteredRestaurants);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="display-container">
        {filteredData.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/Restaurants/${restaurant.id}`}
            className="no-underline"
          >
            {restaurant.promoted ? (
              <RestraCardPromoted resData={restaurant} />
            ) : (
              <RestrCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
