import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item1) => {
          return (
            <CartItem
              item={{ id : item1.id, title: item1.name, quantity: item1.quantity, total: item1.quantity * item1.unitPrice , price: item1.unitPrice }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
