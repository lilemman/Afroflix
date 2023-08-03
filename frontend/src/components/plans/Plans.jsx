import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.scss";
const Plans = () => {
  const [products, setProducts] = useState([]);
  return (
    <div className="plans">
      <div className="plans__products">
        <div className="plans__bronze">
          <h2 className="plans__title">Bronze</h2>
          <h4 className="plans__desc">Watch in 720p </h4>
          <div className="plans__button">
            <Link
              to="https://buy.stripe.com/test_5kA01h4ZA8fE1R66oq "
              target="blank"
            >
              <button className="plans__btn">Subscribe</button>
            </Link>
          </div>
        </div>
        <div className="plans__bronze">
          <h2 className="plans__title">Silver</h2>
          <h4 className="plans__desc">Watch in 1020p </h4>
          <div className="plans__button">
            <Link
              to="https://buy.stripe.com/test_9AQeWbajUbrQ67m5kl"
              target="blank"
            >
              <button className="plans__btn">Subscribe</button>
            </Link>
          </div>
        </div>
        <div className="plans__bronze">
          <h2 className="plans__title">Gold</h2>
          <h4 className="plans__desc">Watch in 4K + HDR </h4>
          <div className="plans__button">
            <Link
              to="https://buy.stripe.com/test_dR67tJ63E7bAdzO144"
              target="blank"
            >
              <button className="plans__btn">Subscribe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
