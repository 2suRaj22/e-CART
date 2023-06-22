import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          Qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          Qty: 10,
          img: '',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          Qty: 4,
          img: '',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product)=>{
    console.log('heyy pls inc the qty of product ',product);
    const{products} = this.state;  
    const index = products.indexOf(product);

    products[index].Qty +=1;
    this.setState({
        products
    })
  }
  handleDecreaseQuantity = (product)=>{
    console.log('heyy pls inc the qty of product ',product);
    const{products} = this.state;  
    const index = products.indexOf(product);

    if(products[index].Qty === 0){
        return;
    }
    products[index].Qty -=1;
    this.setState({
        products
    })
  }
  handleDeleteProduct = (id )=>{
   const { products} = this.state;

   const items = products.filter((item)=>item.id !==id); // it will return array [{}]
   this.setState({
    products:items
   })
  }
  render () {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onhandleDeleteProduct={this.handleDeleteProduct}
            />    
          )
        })}
      </div>
    );
  }
}

export default Cart;