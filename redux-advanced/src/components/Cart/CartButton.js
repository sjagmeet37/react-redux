import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const cartItemCount = useSelector(state => state.cart.count);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemCount}</span>
    </button>
  );
};

export default CartButton;
