import React from 'react';

import burgerLogo from '../../assets/images/burger.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img width={props.width} src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;