import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const productList = useSelector((state) => state.products.products);
  console.log(productList);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList.map((item) => {
          return (
              <ProductItem
                id={item.id}
                title={item.name}
                price={item.unitPrice}
                description={item.description}
              />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
