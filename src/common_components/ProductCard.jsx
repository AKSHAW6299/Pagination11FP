import React from "react";

function ProductCard({image, title}) {
    return(
        <div className="product-card">
            <img src={image} alt={title} className="product-img" />
            <span>{title}</span>
        </div>
    )
}
export default ProductCard