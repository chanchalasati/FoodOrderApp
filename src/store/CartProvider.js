import CartContext from "./Cart-context"

const CardProvider = (props) => {
    const addItemToCardHandler = () => { }
    const removeItemToCardHandler = () => { }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem:addItemToCardHandler,
        removeItem:removeItemToCardHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CardProvider;