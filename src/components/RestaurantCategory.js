import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Itemlist from "./Itemlist";

function RestaurantCategory({ category, isActive, setActiveCategory }) {
  return (
    <div className="category">
      <div className="accordance " onClick={setActiveCategory}>
        <h3 id="categoryName">
          {category.name} ({category.items.length})
        </h3>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="arrowDown"
          style={{ display: isActive ? "none" : "block" }}
        />
      </div>
      {isActive && <Itemlist category={category} />}
    </div>
  );
}

export default RestaurantCategory;
