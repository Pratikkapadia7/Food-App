import React, { useContext, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
const MealItemForm = (props)=>{
    const addItemCtx = useContext(CartContext);
    const [cartState, setCartState] = useState(
        {
            id: props.items.id, 
            numItems: props.items.amount, 
            price: props.items.price, 
            name: props.items.name
        });
    
    
    const addItemHandler = (event) =>{
        event.preventDefault();
        console.log(event.target[0].value);
        console.log("Form Submitted", cartState);
        setCartState({id: props.items.id, 
            numItems: parseInt(event.target[0].value), 
            price: props.items.price, 
            name: props.items.name});
        const cartStateDuplicate = cartState;
        addItemCtx.addItem(cartStateDuplicate);
    }
    const setCartStateHandler = (props)=>{
        console.log(props);
        setCartState(props);
    }
    return(
        <form onSubmit={addItemHandler} className = {styles.form} >
            <Input label="Amount" setCartState={setCartStateHandler} input={{
                id: props.items.id,
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1',
                price: props.items.price,
                name : props.items.name,
                amount: props.items.amount
            }} />
            <button>+ Add</button>
        </form>
    );
}
export default MealItemForm;