import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {
	const [loading, setLoading] = useState({ state: true, data: [] });
	const getDB = async () => {
		try {
			const { data } = await axios.get('http://openapi.foodsafetykorea.go.kr/api/서비스키/COOKRCP01/json/1/5');
			const {
				COOKRCP01: { row },
			} = data;
			setLoading({ state: false, data: row });
			console.log(row);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getDB();
	}, []);

	return (
		<div className='App'>
			{loading.state ? (
				<h1>로딩중입니다...</h1>
			) : (
				loading.data.map((el) => (
					<div key={el.RCP_SEQ}>
						<span style={{ color: 'red' }}>레시피명: {el.RCP_NM}</span>
						<span>조리방법: {el.RCP_WAY2}</span>
						<div>
							<span>{el.MANUAL01}</span>
							<span>{el.MANUAL02}</span>
							<span>{el.MANUAL03}</span>
						</div>
					</div>
				))
			)}
		</div>
	);
}

export default App;
