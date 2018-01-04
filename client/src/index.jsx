import React from 'react';
import ReactDOM from 'react-dom';
import groceryList from '../../database/data.js'
import GroceryList from './components/GroceryList.jsx'
import AddGrocery from './components/AddGrocery.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList.groceryList
    }
  }

  addGrocery(newItem, quantity) {
    
    var added = false;
    var parsedQuantity = parseInt(quantity);

    this.state.list.forEach( (item) => {
      if (item.description.toLowerCase() === newItem.toLowerCase()) {
        item.quantity = item.quantity + parsedQuantity;
        added = true;
      }
    });

    var itemToBuy = {
      id: this.state.list[this.state.list.length - 1].id,
      quantity: parsedQuantity,
      description: newItem
    };

    if (!added) {
      this.state.list.push(itemToBuy);
    }

    this.setState({
      list: this.state.list
    })
  }

  
  render () {
    return (
      <div>
        <h3>Grocery list</h3>
        <AddGrocery addGrocery={this.addGrocery.bind(this)}/>
        <GroceryList items={this.state.list} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));