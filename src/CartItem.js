import React from "react";

const CartItem = (props) =>{
 const { price, title, Qty } = props.product;
 const {
            product ,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
              } = props;
        return(
            <div className="cart-item">
              <div className="left-block">
                <img style={styles.image} src="product.img"/>
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
                    onClick={()=> onDeleteProduct(product.id)}
                    />
                </div>

              </div>
            </div>
        );
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