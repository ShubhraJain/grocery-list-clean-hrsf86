import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }

  }
    
  handleAdd(event) {
    event.preventDefault();
    var groceryItem = this.refs.description.value;
    var quantity = this.refs.quantity.value;
    this.props.addGrocery(groceryItem, quantity);
    this.refs.description.value = '';
    this.refs.quantity.value = '';
  }

  render () {
    return (
      <div>
        <div>      
          <label>
            Description
            <input type="text" ref="description"/>
          </label>
        </div>
        <div> 
          <label>
            Quantity
            <input type="text" ref="quantity"/>
            <button onClick={this.handleAdd.bind(this)}>Add</button>
          </label>
        </div>  
      </div>  
    )
  }
}

export default AddGrocery;

