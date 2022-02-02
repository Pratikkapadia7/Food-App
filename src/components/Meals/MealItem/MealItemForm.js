import React, { useContext, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
const MealItemForm = (props)=>{
    const addItemCtx = useContext(CartContext);
    const [cartState, setCartState] = useState({id: props.items.id, numItems: props.items.amount, price: props.items.price, name: props.items.name});
    const addItemHandler = (event) =>{
        event.preventDefault();
        addItemCtx.addItem(cartState);
    }
    return(
        <form className = {styles.form} >
            <Input label="Amount" setCartState={setCartState} input={{
                id: props.items.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
                price: props.items.price,
                name : props.items.name
            }} />
            <button onClick={addItemHandler}>+ Add</button>
        </form>
    );
}
export default MealItemForm;