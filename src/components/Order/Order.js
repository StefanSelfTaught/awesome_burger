import React from 'react';
import classes from './Order.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const order = props => {
    const ingredients = [];

    for ( let ingredientName in props.ingredients ) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <li key={ig.name} className={classes.ingredients}>{ig.name} ({ig.amount})</li>;
    });

    return (
        <div className={classes.Order}>
            <div className={classes.info}>
                <h3 className={classes.text}>Ingredients:</h3> 
                <ul>
                {ingredientOutput}
                </ul>
                <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
                <Button
                    clicked={props.handleDeleteOrder}
                    btnType="dangerDelete">
                    Delete order
                </Button>
                <Link
                    to={`/orders/${props.orderId}`} 
                    exact>
                        <Button
                            btnType="successDetails">
                            View info
                        </Button>
                </Link>
            </div>
        </div>
    );
};

export default order;