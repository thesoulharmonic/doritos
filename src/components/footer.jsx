import React, { useState } from "react";
import logo from "../../src/img/logo.gif";
import { Link } from "react-router-dom";

// converted into a function component
const FooterMenu = () => {
const [className, setClassName] = useState("menuButton");
const [imageUrl, setImageUrl] = useState({ logo });
const [page1, setPage1] = useState("./products");
const [page2, setPage2] = useState("./about");
const [page3, setPage3] = useState("./videos");
const [page4, setPage4] = useState("./wheretobuy");
const [page5, setPage5] = useState("./solidblack");
const [page6, setPage6] = useState("./pepsico");


// used <Link> to navigate different pages
// loads URLs from object
return (
<>
<div className="container">
<div className="row ">
<div className="col-lg-3 col-md-6"></div>
<div className="col-lg-3 col-md-6">
<div className="imageFooter">
<img src="../img/logo_footer.webp" alt="crisps" />
</div>
</div>
<div className="col-lg-3 col-md-6">
<div className="imageFooter">
<img src="../img/fritolay.webp" alt="crisps" />
</div>
</div>
<div className="col-lg-3 col-md-6"></div>
</div>
</div>

<nav>
<span className="menuLogo">
<a href="/">
<img src={logo} alt="logo" />
</a>
</span>
<a href="https://www.doritos.com/">
<button className={className}>DORITOS.COM</button>
</a>
<Link to={page2}>
<button className={className}>Terms & Conditions</button>
</Link>
<Link to={page3}>
<button className={className}>Privacy Policy</button>
</Link>
<Link to={page4}>
<button className={className}>Pepsico Foodservice</button>
</Link>
<Link to={page5}>
<button className={className}>Accessibility Statement</button>
</Link>
<Link to={page6}>
<button className={className}>Pepsico Tasty Rewards</button>
    </Link>
  </nav>
</>
);
};

export default FooterMenu;