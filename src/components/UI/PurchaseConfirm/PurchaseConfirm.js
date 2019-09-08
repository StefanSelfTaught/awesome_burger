import React from 'react';
import classes from './PurchaseConfirm.css';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const PurchaseConfirm = props => (
  <Modal modalClosed={props.purchasedSeen} show={props.show}>
  	<div className={classes.wrapper}>
	     <h3 className={classes.message}>Your order was succsesfuly placed!</h3>
	     <h4 className={classes.message2}>
	      	Visit <NavLink className={classes.orders} to="/orders">orders</NavLink> to see all your orders.
	     </h4>
	     <Button className={classes.ok} btnType="Success" clicked={props.clicked}>Ok</Button>
     </div>
   </Modal> 
);

export default PurchaseConfirm;
