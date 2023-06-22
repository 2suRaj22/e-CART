import React from "react";


class CartItem extends React.Component{
  
    render (){
        console.log('this.props', this.props);
        const { price, title, Qty } = this.props.product;
        const {
            product ,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onhandleDeleteProduct
              } = this .props;
        return(
            <div className="cart-item">
                {this.props.jsx}
              <div className="left-block">
                <img style={styles.image}/>
                </div>  
              <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color: '#777'}}>Rs:  {price}</div>
                <div style={{color: '#777'}}>Qty:  {Qty}</div>
                <div className=".cart-item-actions">
                    {/* Buttons */}
                    <img 
                    alt="Increase"  
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                    onClick={()=> onIncreaseQuantity(product) }
                    
                    />

                    <img 
                    alt="Decrease"  
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/4315/4315581.png"
                    onClick={()=> onDecreaseQuantity(product)}
                    />

                    <img 
                    alt="delete"  
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/8835/8835400.png"
                    onClick={()=> onhandleDeleteProduct(product.id)}
                    />
                </div>

              </div>
            </div>
        );
    }
        }

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'

    }
}
export default CartItem;