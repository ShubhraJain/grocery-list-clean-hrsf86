import React from 'react';

const GroceryItem = (props) => (
  <div>
    <li>{props.item.description} {props.item.quantity}</li>
  </div>
)

export default GroceryItem;