import { Fragment } from 'react/cjs/react.production.min';
import AvailableMeals from './AvailableMeals';
import './Meals.module.css'
import MealsSummary from './MealsSummary';


const Meals = ()=>{

    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>

    );

};

export default Meals;
