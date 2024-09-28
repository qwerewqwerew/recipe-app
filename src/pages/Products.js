import { Link } from "react-router-dom";
const PRODUCT = [
  {
    id: "1",
    title: "상품1",
    description: "111111111111111111111111111111111",
  },
  {
    id: "2",
    title: "상품2",
    description: "22222222222222222222222222222222",
  },
  {
    id: "3",
    title: "상품3",
    description: "33333333333333333333333333333333",
  },
];
const Products = (props) => {
  return (
    <>
      <div>Products</div>
      <ul>
        {PRODUCT.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`}>
              {item.title}
              <br /> {item.description}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Products;
