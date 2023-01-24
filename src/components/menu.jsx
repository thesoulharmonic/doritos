import React, { useState } from "react";
import logo from "../../src/img/logo.gif";
import { Link } from "react-router-dom";
import ProdLinks from "./prodlink";

//convereted to function by importing useState and re ordering the class component

const Menu = () => {
const [className, setClassName] = useState("menuButton");
const [imageUrl, setImageUrl] = useState({ logo });
const [page1, setPage1] = useState("./products");
const [page2, setPage2] = useState("./about");
const [page3, setPage3] = useState("./videos");
const [page4, setPage4] = useState("./wheretobuy");
const [page5, setPage5] = useState("./solidblack");


// used <Link> to navigate different pages
// loads URLs from object
return (
<nav>
<span className="menuLogo">
<a href="/">
<img src={logo} alt="logo" />
</a>
</span>
<ProdLinks alert="You've won a years supply of Flamin' Hot! Wooohoooo! Email info@doritos.com to claim your prize"/>
<Link to={page1}>
<button className={className}>Products</button>
</Link>
<Link to={page2}>
<button className={className}>About</button>
</Link>
<Link to={page3}>
<button className={className}>Videos</button>
</Link>
<Link to={page4}>
<button className={className}>Where to buy</button>
</Link>
<Link to={page5}>
<button className={className}>Solid Black</button>
</Link>
</nav>
);
};

export default Menu;