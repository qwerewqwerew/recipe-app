import Table from './Table';

const Fruit = ({fav,papapa,something}) => {
	//console.log(props);
	return (
		<>
			<h3>좋아하는 과일: {fav}</h3>
			<h3>{papapa}</h3>
			<h3>{something.toString()}</h3>
		</>
	);
};

function App() {
	return (
		<div>
			<h1>도레미레시피앱</h1>
			<Fruit fav='바나나' something={true} papapa={['hello', 1, 2, 3]} />
			<Fruit fav='딸기' something={false} papapa={['바이바이', 1, 2, 3]} />
			<Fruit fav='수박' something={true} papapa={['hello', 1, 2, 3]} />
		</div>
	);
}

export default App;
