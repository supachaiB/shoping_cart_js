import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { item, onIncrement, onDecrement } = this.props;

    return (
      <div className="counter">
        <p>{item.itemname}</p>
        <img src={item.image} alt={item.itemname} style={{ width: "170px", height: "150px" }} />
        <p>฿{item.price}</p>
        <p>{item.value} Unit</p>
        <button onClick={() => onIncrement(item)} className="btn-add-counter">+</button>
        <button onClick={() => onDecrement(item)} className="btn-delete-counter">-</button>
      </div>
    );
  }
}

export default Counter;
