import React,{ useState } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
const Cart = (props)=>{

    // console.log(props);
    //Copy all the Items Data in ArrayData
    const arrayData = [...props.items];
    arrayData.shift();
    const hasItems = arrayData.length>0;
    const [cartItem, setCartItem] = useState(arrayData);

    const itemRemoveHandler =(props)=>{
        const itemID = props.target.value;
        const removeItemIndex= cartItem.findIndex((element)=>(element.id===itemID));
        setCartItem((prevState)=>{
            let newState= [...prevState];
            if(newState[removeItemIndex].numItems>= 1){
                newState[removeItemIndex].numItems = newState[removeItemIndex].numItems-1;
            }
            if(newState[removeItemIndex].numItems=== 0){
                newState.splice(removeItemIndex,1);   
            }
            return newState
        })
    }


    const itemAddHandler =(props)=>{
        // console.log(props.target.value);
        // console.log(arrayData);
        const itemID = props.target.value;
        const removeItemIndex= cartItem.findIndex((element)=>(element.id===itemID));
        setCartItem((prevState)=>{
            let newState= [...prevState];
            if(newState[removeItemIndex].numItems<5){
                newState[removeItemIndex].numItems = newState[removeItemIndex].numItems+1;
            }
            
            return newState
        })
    }
    // console.log(cartItem);
    const cartItems = <ul className={styles['cart-items']} >{cartItem.length>0 &&
        cartItem.map((item) => {
            return (item.numItems> 0 && <CartItem 
            key={item.id} 
            id={item.id}
            name={item.name} 
            amount={item.numItems} 
            price={item.price}
            onRemove={itemRemoveHandler}
            onAdd= {itemAddHandler}
            />)})
    }</ul>;

    let totalAmount = 0;
    arrayData.forEach(element => {
        totalAmount = totalAmount + element.price*element.numItems;
    });
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>$ {totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
}
export default Cart;