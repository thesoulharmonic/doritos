import React from "react";
import Carousel from "./carousel-home";
import Product from "./product";
import Videos from "./videos";

// converted to function comp format 

const Header = () => {
return (
<>
<Carousel />
<div className="container home-products-main">
<div className="row">
<div className="products">
<h2>Products</h2>
</div>
<Product />
<a href="/products">
<button className="menuButton">Products</button>
</a>
</div>
</div>
<div className="homeVideos">
<Videos />
</div>
</>
);
};

export default Header;




