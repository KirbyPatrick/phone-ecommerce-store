// Context API to allow our state of products: storeProducts to be accessable throughout
// the app without needing prop drilling. Similar to Redux.  
// https://www.carlrippon.com/wp-content/uploads/2018/04/prop-drilling-v-context.png

import React, { Component } from 'react';
//above is creating a context object.  Context objects come with 2 components:
//Provider - provides all the information for all the application.  Provider is set up on the top of the application
//Consumer - whenever we want to use the infomation the provider gives, we use the consumer object. This way we don't have to pass props through components to get them to child components.

import { storeProducts, detailProduct } from './data';
//pulling the data from 'data.js' so we can set it as the value of the Provider object. 

const ProductContext = React.createContext()

class ProductProvider extends Component {

  state = {
    products: storeProducts,
    detailProduct: detailProduct
  }

  handleDetail = () => {
    console.log('hello from detail');
  }

  addToCart = () => {
    console.log('hello from addToCart');
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };