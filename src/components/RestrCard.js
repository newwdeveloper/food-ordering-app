const RestrCard = (props) => {
  const { resData } = props;

  return (
    <div className="restracard">
      <div className="img-container">
        <img className="card-img" src={resData.image} alt="menu img"></img>
      </div>
      <h3 id="hotelName">{resData.name}</h3>
      <h4 id="foodType">{resData.cuisine}</h4>
      <h4 id="rating">{resData.rating} Stars</h4>
      <h4 id="time">{resData.deliveryTime}</h4>
    </div>
  );
};

export function WithPromottedLable(RestrCard) {
  return (props) => {
    return (
      <div>
        <label className="promoted">Promoted</label>
        <RestrCard {...props} />
      </div>
    );
  };
}
/*return (
    <div className="restracard">
      <div className="img-container">
        <img className="card-img" src={resData.image} alt="menu img"></img>
      </div>
      <h3 id="hotelName">{resData.name}</h3>
      <h4 id="foodType">{resData.cuisine}</h4>
      <h4 id="rating">{resData.rating} Stars</h4>
      <h4 id="time">{resData.deliveryTime}</h4>
    </div>
  );
};*/

export default RestrCard;
