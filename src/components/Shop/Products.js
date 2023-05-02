import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const productItems = useSelector((state) => state.productItem);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems.length > 0 &&
          productItems.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
      </ul>
    </section>
  );
};

export default Products;
