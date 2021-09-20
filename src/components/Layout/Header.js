import React, { Fragment } from 'react';
import mealPic from '../../assets/meals.jpg';
import classes from '../../components/Layout/Header.module.css';
import HeaderCartButton from './HeaderCartButtob';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Order Food Online</h1>
               <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealPic} alt="delicious Meal"/>
            </div>
        </Fragment>
    )

}
export default Header;