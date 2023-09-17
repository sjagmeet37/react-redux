import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./store/ui-actions-slice";
import Notification from "./components/UI/notification";

function App() {
  const showCart = useSelector((state) => state.uiActions.showCart);
  const notification = useSelector((state) => state.uiActions.notification);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(notification);

  useEffect(() => {
    const setData = async () => {
      dispatch(
        uiActions.setNotification({
          status: "Pending...",
          title: "Sending...",
          message: "Sending Cart data!",
        })
      );
      const response = await fetch(
        "https://react-1bc4c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
        }
      );

      if (!response.ok) {
        throw new Error("Failed Sending data");
      }

      dispatch(
        uiActions.setNotification({
          status: "Succesful...",
          title: "Sent",
          message: "Sent Cart data!",
        })
      );
    };

    setData().catch((error) => {
      dispatch(
        uiActions.setNotification({
          status: "Failed",
          title: "Failed",
          message: "Failed to send Cart data!",
        })
      );
    });
  }, [cartItems, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
