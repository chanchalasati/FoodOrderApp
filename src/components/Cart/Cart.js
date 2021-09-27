
import classes from './Cart.module.css';
import Modal from './Modal.js';
const Cart = (props) => {
    const cartItem = <ul className={classes['cart-item']}>{ [{ id: 'c1', name: 'Shushi', amount: 2, price: 22.99 }].map(item => <li>{item.name}</li>) }</ul>

    const closeButtonHandler = ()=>{
        props.onHideCart();
    }
    return <Modal>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>$22.90</span>
        </div>
        <div className={classes.actions}>
            <button
                className={classes['button--alt']}
                onClick={closeButtonHandler}
            >Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;