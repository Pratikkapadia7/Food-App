import React,{ useState } from "react";
import styles from "./Input.module.css";
const Input = (props)=>{
    const inputHandler = (event) =>{
        props.setCartState(
            {id: event.target.id, 
            numItems: parseInt(event.target.value), 
            price: props.input.price, 
            name: props.input.name})
    }
    
    return(
        <div className={styles.input}>
            <label htmlFor = {props.input.id}>{props.label}</label>
            <input id ={props.input.id} {...props.input} onChange={inputHandler} step='1' min = "1" max = "5"/>
        </div>
    );
}   
export default Input;