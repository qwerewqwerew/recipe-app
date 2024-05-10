import { useState, useEffect } from 'react';

const UnMount = () => {
	console.log('타이머 준비중');
	useEffect(() => {
		const timer = setInterval(() => {
			console.log('타이머 진행중');
		}, 1000);
		return ()=>{
			clearInterval(timer)
		}
	},[]);
	return <p>타이머진행중</p>;
};

const LifeCycle = () => {
	const [mount, setMount] = useState(0);
	const [rerender, setreRender] = useState(0);
	const [update, setUpdate] = useState(0);
	const [stop, setStop] = useState(false);
	useEffect(() => {
		console.log('마운트됨');
	}, []);
	useEffect(() => {
		console.log('리렌더됨');
	});
	useEffect(() => {
		console.log('업데이트됨');
	}, [update]);

	return (
		<>
			<h1>
				mount:{mount} <button onClick={() => setMount(mount + 1)}>click</button>
			</h1>
			<h1>
				rerender:{rerender} <button onClick={() => setreRender(rerender + 1)}>click</button>
			</h1>
			<h1>
				update:{update} <button onClick={() => setUpdate(update + 1)}>click</button>
			</h1>
			<div>
				{!stop?<UnMount />:"타이머 준비중"}
				<button onClick={()=>setStop(!stop)}>stop</button>
			</div>
		</>
	);
};
export default LifeCycle;
