import styles from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) =>{
    return(
        <>
            <header className={styles.header}>
                <h1>React Food</h1>
                <HeaderCartButton items={props.items} onClick={props.onClickHandler}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealImage} alt='A table full of delicious food'/>
            </div>
        </>
    );
}
export default Header;