import React from 'react';
import { Fragment, useContext } from 'react';
import Title from '../components/Title';
import List from '../components/List';
import { DataContext } from '../App';

const Home = (props) => {
	const { data, loading } = useContext(DataContext);

	if (loading) {
		return <h1>데이터를 로드 중 입니다.</h1>;
	}
	if (!data || data.length === 0) {
		return <h1>데이터를 준비 중 입니다.</h1>;
	}
	const categories = [...new Set(data.map((data) => data.RCP_WAY2))];

	return (
		<>
			{categories.map((category) => {
				return (
					<Fragment key={category}>
						<Title title={category} />
						<List data={data.filter((item) => item.RCP_WAY2)} />
					</Fragment>
				);
			})}
		</>
	);
};
export default Home;
