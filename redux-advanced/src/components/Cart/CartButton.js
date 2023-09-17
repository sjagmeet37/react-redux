import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-actions-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const cartItemCount = useSelector(state => state.cart.count);

  const showCartHandler = () => {
    dispatch(uiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemCount}</span>
    </button>
  );
};

export default CartButton;
