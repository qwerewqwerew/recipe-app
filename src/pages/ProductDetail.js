import { useParams, Link } from "react-router-dom";
const ProductDetail = (props) => {
  console.log(useParams());
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
      <div>ProductDetail</div>
    </>
  );
};
export default ProductDetail;
