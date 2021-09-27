import React, { useContext } from 'react';
import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/Cart-context';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
    const context = useContext(CartContext);
    const buttonClickHandler = () => {
        props.onClick();
    }

    const numberOfCartItem = context.items.reduce((currNumber, item) => {
        return currNumber + item.amount
    },0)
    return (
        <button
            className={classes.button}
            onClick={buttonClickHandler}
        >
            <span className={classes.icon}><CartIcon/>   </span >
            <span >Your Card</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>

    );

}

export default HeaderCartButton;