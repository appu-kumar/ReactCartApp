import React from 'react';
import CartItem from './CartItem';
function Cart(props) {

    const { products,increaseItem, decreaseItem, deleteItem } = props;
    return (
        <div className="carts">
            {
                products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            id={product.id}
                            increaseItem={increaseItem}
                            decreaseItem={decreaseItem}
                            deleteItem={deleteItem}
                            key={product.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cart;