import { Link, useNavigate } from 'react-router-dom';
const Home = (props) => {
	const navi = useNavigate();
	console.log(navi);
	const naviFn = () => navi('/app');
	return (
		<>
			<h1>HOME</h1>
			<button onClick={naviFn}>click</button>
			<a href='/products'>Products</a>
			<Link to='/products'>LINK-product</Link>
			<Link to='http://naver.com' target='_blank'>
				naver
			</Link>
		</>
	);
};
export default Home;
