import React, { Component } from "react";

// has an object containing and array fo items which are then itterated through
// item values are dynamically inserted into the divs 

// this works better as a class component so haven't converted it as it isn't as nice in a function 
export default class Product extends Component {
    state = {
        items: [
            {
                itemname: "Flamin Hot Nacho",
                imgUrl: "../img/crisp1.webp",       
            },
            {
                itemname: "Chilli Cheese 3D",
                imgUrl: "../img/crisp2.webp",
            },
            {
                itemname: "Spicy Ranch 3D",
                imgUrl: "../img/crisp3.webp",
            },
            {
                itemname: "Flmin Hot Limon",
                imgUrl: "../img/crisp4.webp",
            },
            
        ]
    };
    
    // iterates the array to display products seperatley in the bootstrap styling
    renderItems() {
        const { items } = this.state;

        if (items.length === 0) return <p>There are no products</p>;
        return items.map((item, index) => {
            return (
                <div className="col-lg-3 col-md-6" key={index}>
                <div className="product-container">
                    <div className="itemImg">
                        <img src={item.imgUrl} alt={item.itemname}/>
                    </div>
                    <span className="itemName">{item.itemname}</span>

                </div>
                </div>
            );
        });
    }
    



// renders the function properties and values

  render() {
    return (
      <>
          {this.renderItems()}
      </>
    );
  }
}
