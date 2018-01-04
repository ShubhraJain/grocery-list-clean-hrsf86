import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
  <div className="groceries">
    <ul>
      {props.items.map((item, idx) =>
        <GroceryItem 
          key={idx} 
          item={item}
        />
      )}
    </ul>
  </div>
)

export default GroceryList;