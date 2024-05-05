const Fruit = ({ name,img }) => {
	return (
		<>
			<h3>좋아하는 과일: {name}</h3>
			<img src={img} alt={name} />
		</>
	);
};
const fruitDB = [
	{ name: 'banana ', image: 'http://qwerew.cafe24.com/images/banana.png' },
	{ name: 'orange', image: 'http://qwerew.cafe24.com/images/orange.png' },
	{ name: 'apple', image: 'http://qwerew.cafe24.com/images/apple.png' },
	{ name: 'melon', image: 'http://qwerew.cafe24.com/images/melon.jpg' },
];

function App() {
	return (
		<div>
			<h1>도레미레시피앱</h1>
			{fruitDB.map((value,index) => {
				console.log('value',value);
				return <Fruit key={index} name={value.name} img={value.image}/>;
			})}
		</div>
	);
}

export default App;
