import CartContext from "./cart-context";
import React,{ useState } from "react";



const CartProvider = (props) =>{
    const addItemHandler = (items)=>{
        // console.log(items);
        setCartState((prevState) =>{
            // console.log(prevState);
            let arrayData= [...prevState];
            
            const isIdFound = (element) =>{
                return(element.id === items.id);
            }
            const indexData= arrayData.findIndex(isIdFound);
            if(items.numItems <= 5){
                if(indexData !== -1){
                    arrayData[indexData].numItems = items.numItems;
                }
                else{
                    arrayData = prevState.concat(items);
                }
            }
            
            props.cartItem(arrayData);
            return arrayData;
        });
    }
    
    
    const defaultCartState =[{
        id: '',
        itemCount: 0
    }]
    
    
    const removeItemHandler = (id) =>{};
    const cartContext ={
        items:[{
            id: '',
            numItems: 0
        }],
        amount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    // const [totalAmount, setTotalAmount] = useState(0);
    const [cartState, setCartState] = useState(defaultCartState);
    
    
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;