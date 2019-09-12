import React from 'react';
import classes from './Order.css';

const order = ( props ) => {
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
                <button 
                    style={{ marginTop: '10px' }} 
                    onClick={props.handleDeleteOrder}>
                    Delete order
                </button>
            </div>
        </div>
    );
};

export default order;