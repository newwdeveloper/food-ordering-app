import OrderInput from "./OrderInput";

function Itemlist({ category }) {
  return (
    <div className="fill">
      <ul className="structure">
        {category.items.length > 0 ? (
          category.items.map((item) => (
            <li key={item.name}>
              <div className="flexit">
                <div className="imgMenu">
                  <img src={item.img} alt={item.name} />
                </div>
                <div style={{ width: "200px" }}>
                  <span style={{ fontSize: "1.5vw", fontWeight: "lighter" }}>
                    {item.name}
                  </span>{" "}
                  -{" "}
                  <span style={{ fontSize: "1.5vw", fontWeight: "lighter" }}>
                    ₹{item.price}
                  </span>
                </div>
                <OrderInput resData={item} />
              </div>
            </li>
          ))
        ) : (
          <li>No items available in this category.</li>
        )}
      </ul>
    </div>
  );
}

export default Itemlist;
