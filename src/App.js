import React from 'react';
import Cart from './Cart'
import NavBar from './NavBar';
import Footer from './Footer';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'Mobile phone',
          price: 2500,
          image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
          qty: 1,
          id: 1
        },
        {
          title: 'Camera',
          price: 250,
          image: 'https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg',
          qty: 1,
          id: 2
        },
        {
          title: 'webCam',
          price: 1500,
          image: 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViY2FtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          qty: 1,
          id: 3
        }
      ]
    }

  }

  increaseItem = (product) => {

    const { products } = this.state;
    let index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products
    })
  }
  decreaseItem = (product) => {

    const { products } = this.state;
    let index = products.indexOf(product);
    if (products[index].qty === 0)
      return
    products[index].qty -= 1;
    this.setState({                          // just updating the state okk nothing else
      products: products
    })
  }
  deleteItem = (id) => {

    const { products } = this.state;
    const tempProducts = products.filter(product => product.id !== id)

    this.setState({
      products: tempProducts
    })
  }
  countProducts = () => {
    const { products } = this.state;
    // let len=products.length;
    let countproducts = 0;
    // for(let i=0;i<len;i++ )
    // {
    //        for(let product in products[i])
    //        {
    //           countproducts+=product.qty; 
    //        }
    // }
    products.forEach((product) => {
      countproducts += product.qty;
    })
    return countproducts;
  }
  getTotalPrice = () => {

    const { products } = this.state;
    let totalprice = 0;

    products.forEach((product) => {

      totalprice += product.price*product.qty;
    })

      return totalprice;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <NavBar countProducts={this.countProducts()} />
        <Cart
          products={products}
          increaseItem={this.increaseItem}
          decreaseItem={this.decreaseItem}
          deleteItem={this.deleteItem}
        />

        <Footer total={this.getTotalPrice()} />
      </div>
    );
  }
}

export default App;
