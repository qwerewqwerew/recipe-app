import { useState } from 'react';
const Counter = () => {
	//let num = useState(0);
	//let count=num[0];
	//let setCount=num[1];
	let [count, setCount] = useState(0);
  const countHandler=()=>{
    setCount(count + 1)
  }
	return (
		<>
			<h1>{count}</h1>
			<button onClick={countHandler}>click</button>
		</>
	);
};
export default Counter;
