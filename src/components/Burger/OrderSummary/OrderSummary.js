import React, { Component } from 'react';

import Aux from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3 style={{ marginBottom: '15px' }}>Your Order</h3>
                <p style={{ marginBottom: '15px' }}>A delicious burger with the following ingredients:</p>
                <ul style={{ marginLeft: '35px', marginBottom: '15px' }}>
                    {ingredientSummary}
                </ul>
                <p style={{ marginBottom: '10px' }}><strong>Total Price: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;