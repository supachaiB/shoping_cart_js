import React, { Component } from "react";
import Counter from "./Counter";
import iphone from "./iPhone_15.jpg";
import ipad from "./iPad_pro.jpg";
import imac from "./imac_21.5.jpg";
import ibook from "./IBook_G4.jpg";

class CounterList extends Component {
  state = {
    itemlist: [
      { id: 1, value: 0, itemname: "iPhone", price: 150, image: iphone },
      { id: 2, value: 0, itemname: "iPad", price: 200, image: ipad },
      { id: 3, value: 0, itemname: "iMac", price: 300, image: imac },
      { id: 4, value: 0, itemname: "iBook", price: 500, image: ibook },
    ],
    total: 0,
  };

  calculateTotalPrice = () => {
    return this.state.itemlist.reduce(
      (total, item) => total + item.value * item.price,
      0
    );
  };

  handleIncrement = (item) => {
    const updatedItems = this.state.itemlist.map((i) => {
      if (i.id === item.id) {
        i.value++;
      }
      return i;
    });

    this.setState({ itemlist: updatedItems, total: this.calculateTotalPrice() });
  };

  handleDecrement = (item) => {
    const updatedItems = this.state.itemlist.map((i) => {
      if (i.id === item.id && i.value > 0) {
        i.value--;
      }
      return i;
    });

    this.setState({ itemlist: updatedItems, total: this.calculateTotalPrice() });
  };

  handleReset = () => {
    const resetItems = this.state.itemlist.map((item) => {
      item.value = 0;
      return item;
    });

    this.setState({ itemlist: resetItems, total: 0 });
  };

  render() {
    return (
      <div className="container">
        <div className="text-right">
          <div className="d-inline mx-2 t">
            Total Price: {this.state.total} THB
          </div>
          <button onClick={this.handleReset} className="btn-reset">
            Reset
          </button>
        </div>
        <div className="row mt-4">
          {this.state.itemlist.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="text-center">
                <Counter
                  item={item}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CounterList;
