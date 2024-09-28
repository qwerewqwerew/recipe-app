import { Link,useParams } from 'react-router-dom';
const ProductDetail = (props) => {
	const { id } = useParams();
	console.log(id);
	return (
		<>
			<div>ProductDetail</div>
			<h1>{id}</h1>
			<Link to='..' relative='path'><button>뒤로</button></Link>
		</>
	);
};
export default ProductDetail;
