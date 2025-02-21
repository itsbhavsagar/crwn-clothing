import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout page bitch!</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity, imageUrl } = cartItem;
          return (
            <div>
              <h2 key={id}>{name}</h2>
              <span>{quantity}</span>
              <img src={imageUrl} alt={`${name}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
