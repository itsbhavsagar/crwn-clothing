import Button from '../button/button.component';
import './cart-dropdown.stylles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button buttonType='inverted'>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
