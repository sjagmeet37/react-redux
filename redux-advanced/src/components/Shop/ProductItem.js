import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {

  const dispatch = useDispatch();

  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    const item = {
      id,
      name : title,
      unitPrice : price,
      description : description,
      quantity : 1
    }

    dispatch(cartActions.addItem(item));
  }

  return (
    <li className={classes.item} key={id}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
