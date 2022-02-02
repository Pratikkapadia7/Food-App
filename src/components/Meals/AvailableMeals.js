import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      amount: 1
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      amount: 1
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      amount: 1
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      amount: 1
    },
];

const AvailableMeals = () =>{
    const mealsData = DUMMY_MEALS.map((meal) => 
        <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id} amount={meal.amount}/>
    );
    return(
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealsData}
                </ul>
            </Card>
            
        </section>
    )
}
export default AvailableMeals;