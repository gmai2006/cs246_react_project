import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";

const CardFeaturedProduct = (props) => {
  const products = props.data;
  return (
    <div className="card mb-3 mt-3" className="c">
      <div className="card-header font-weight-bold text-uppercase">
        Featured Products
      </div>
      <div className="card-body">
        {products.map((product, idx) => (
          <div
            className={`row ${idx + 1 === products.length ? "" : "mb-3"}`}
            key={idx}
          >
            <div className="col-md-4">
              <img src={'/'+ product.image} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-8">
              <h6 className="text-capitalize mt-2" className="j">
                <Link to={"/product/detail/" + product._id} className="text-decoration-none">
                  {product.name}
                </Link>
              </h6>
              {/* <div className="mb-2">
                {Array.from({ length: product.star }, (_, key) => (
                  <IconStarFill className="text-warning mr-1" key={key} />
                ))}
              </div> */}
              <span className="font-weight-bold h5">${product.price}</span>
              {/* {product.originPrice > 0 && (
                <del className="small text-muted ml-2">
                  ${product.originPrice}
                </del>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFeaturedProduct;
