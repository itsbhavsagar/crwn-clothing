import { useContext, useCallback, useRef, useEffect } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const cartIconRef = useRef(null);

  const toggleIsCartOpen = useCallback(() => {
    setIsCartOpen((prevState) => !prevState);
  }, [setIsCartOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartIconRef.current && !cartIconRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsCartOpen]);

  return (
    <div
      className='cart-icon-container'
      onClick={toggleIsCartOpen}
      ref={cartIconRef}
      role='button'
      aria-label='Toggle Cart'
      tabIndex={0}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
