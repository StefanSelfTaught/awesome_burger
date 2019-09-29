import React from 'react';
import { connect } from 'react-redux';
import Burger from '../../Burger/Burger';
import classes from './OrderDetails.css';

const OrderDetails = props => {

	const handleClick = () => {
		props.history.goBack();
	}

	let orderData = [];
	orderData = props.orders.filter(order => order.id === props.match.params.orderId);
	let { country, deliveryMethod, email, name, street, zipCode } = orderData[0].orderData;

	return (
		<div className={classes.wrapper}>
			<div className={classes.orderData}>
				<h1>Order details</h1>
				<ul>
					<li><span>Name:</span> {name}</li>
					<li><span>Street:</span> {street}</li>
					<li><span>Country:</span> {country}</li>
					<li><span>Email:</span> {email}</li>
					<li><span>Zip Code:</span> {zipCode}</li>
					<li><span>Delivery method:</span> {deliveryMethod}</li>
				</ul>
				<button className={classes.goBack} onClick={handleClick}>Go Back</button>
			</div>
			<div className={classes.burgerPreview}>
				<h1>The burger you ordered</h1>
				<Burger defaultBurger={false} ingredients={orderData[0].ingredients}/>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		orders: state.order.orders
	}
}

export default connect(mapStateToProps)(OrderDetails);