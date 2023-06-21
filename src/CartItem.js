import React from "react";


class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            Qty: 1,
            img: ''
        }
        this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity =()=>{
        // console.log('this',this.state);
        // set state form 1
        // this.setState({
        //     Qty:this.state.Qty + 1
        // });

        // set state form 2 - if previous state required use this
        this.setState((prevState)=>{
            return{
                Qty:prevState. Qty+1
            }
        },()=>{
            console.log("this.state",this.state);
        
        });
    }
        decreaseQuantity =()=>{
            const { Qty} = this.state;
            if(Qty === 0){
                return;
            }
        
            // set state form 2 - if previous state required use this
            this.setState((prevState)=>{
                return{
                    Qty:prevState. Qty-1
                }   
            });     
    }
    render (){
        console.log('render');
        const{ price,title,Qty}=this.state;
        return(
            <div className="cart-item">
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
                    onClick={this.increaseQuantity}
                    />

                    <img 
                    alt="Decrease"  
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/4315/4315581.png"
                    onClick={this.decreaseQuantity}
                    />

                    <img 
                    alt="delete"  
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/8835/8835400.png"
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