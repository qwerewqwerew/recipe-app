import { useState, useEffect } from 'react';
function App() {
	const [loading, setLoading] = useState(true);
	const [data, setDate] = useState([]);
	useEffect(() => {
		//데이터로딩
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);
	return <div className='App'>{loading && <h1>로딩중입니다...</h1>}</div>;
}

export default App;
