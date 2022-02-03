import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
const HeaderCartButton = (props) =>{

    let numberOfCartItems=0;
    props.items.forEach(element => {
        if(element.id !== ''){
            numberOfCartItems = numberOfCartItems + element.numItems;
        }
        
    });
    return(
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className = {styles.badge}>{numberOfCartItems}</span>
        </button>
    );
}
export default HeaderCartButton;