import React from "react";
import ProductList from "../../Components/ProductList";
import NoFilterResults from "../../Components/NoFilterResults";

export default function Filter({
  filterText, 
  filterChecker,
  handleDelete,
  handleStocked,
  products, 
  children }) {

  function textFilter(products) {
    const searchPhrase = filterText.toUpperCase();

    return products.filter((product) => {    
      return product.name
        .toUpperCase()
        .indexOf(searchPhrase) !== -1;
    });
  }
    
  function stockedFilter (products) {
    return products.filter((obj) => obj.stocked);
  }

  function getKeysArr(arr) {

    let keysObj = {};
    let keysArr = [];

    for (let item of arr) {
      keysObj[item.category] = item.category
    }

    for (const key in keysObj) {
      keysArr.push(key);
    }

    return keysArr;
  }

  function getSeparatedArr(arrKeys, products) {
    let filteredObj = {};

    for (const iterator of arrKeys) {
      filteredObj[iterator] = [];
    }

    for (const iterator of products) {
      filteredObj[iterator.category].push(iterator);
    }

    return filteredObj;
  }

  function getProductList(collectionsObj) {

    const resCollection = [];

    for (const iterator in collectionsObj) {
      resCollection.push(<ProductList 
        key={iterator} 
        title={iterator} 
        handleDelete={handleDelete}
        handleStocked={handleStocked}
        items={collectionsObj[iterator]} />);
    }

    return resCollection;
  }

  if (filterText !== '') {
    products = textFilter(products);
  }

  if (filterChecker) {
    products = stockedFilter(products);
  }

  if (products.length === 0) {
    return <NoFilterResults />
  }

  const keysArr = getKeysArr(products);
  const separatedArr = getSeparatedArr( keysArr, products);
  const filteredCollections = getProductList(separatedArr);

  return React.cloneElement(children, {
    collection: filteredCollections
  });
}