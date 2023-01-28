import React from 'react';

import SearchBar from './Components/SearchBar';
import AddProduct from './Containers/AddProduct';
import ProductTable from './Components/ProductTable';
import Stock from './Components/Stock';
import RefComponent from './Components/RefComponent';
import FuncRefComponent from './Components/FuncRefComponent';

import UsedLang from './Containers/UsedLang';
import ErrorAction from './Containers/ErrorAction';
import ErrorBoundary from './Containers/ErrorBoundary';

const Filter = React.lazy(() => import('./Containers/Filter'));


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      filterChecker: false,
      error: false,
      products: [
        {id:"0", category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {id:"1", category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {id:"2", category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {id:"3", category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {id:"4", category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {id:"5", category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
      ]
    }
  }

  handleFilter = (e) => {
    this.setState({
      filterText: e.target.value
    });
  }

  handleCheck = (e) => {
    this.setState({
      filterChecker: e.target.checked
    });
  }

  handleAdd = (product) => {
    product.id = Date.now();

    this.setState({
      products: [
        ...this.state.products,
        product
      ]
    });
  }

  handleDelete = (deletedProductId) => {
    const newProductArr = this.state.products
    .filter((product) => product.id !== deletedProductId);

    this.setState({
      products: newProductArr
    });
  }

  handleStocked = (stockedProductId) => {

    const newProductArr = this.state.products.map((product) => {
      if (product.id === stockedProductId) {
        product.stocked = !product.stocked;
      }
      return product;
    });

    this.setState({
      products: newProductArr
    });
  }

  handleError = () => {
    this.setState({
      error: true
    });
  }

  render() {
    return (
      <Stock>
        <RefComponent someProp={'Somr prop'}/>

        <FuncRefComponent someProp={'Some prop'} />

        <ErrorBoundary>
          <ErrorAction error={this.state.error} handleError={this.handleError} />
        </ErrorBoundary>

        <UsedLang />

        <SearchBar filterText={this.state.filterText}
          filterChecker={this.state.filterChecker}
          handleFilter={this.handleFilter}
          handleCheck={this.handleCheck} />
        
        <AddProduct handleAdd={this.handleAdd} />
        
        <Filter filterText={this.state.filterText}
          filterChecker={this.state.filterChecker}
          handleDelete={this.handleDelete}
          handleStocked={this.handleStocked}
          products={this.state.products}>
          <ProductTable />
        </Filter>
      </Stock>
    );
  }
}