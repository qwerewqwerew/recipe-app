import { Fragment } from "react";
import Title from './Title';
import List from './List';
const ListGroup = ({ data }) => {
	const categories = [...new Set(data.map((data) => data.RCP_WAY2))];
	return (
		<>
			{categories.map((category) => (
				<Fragment key={category}>
					<Title title={category} />
					<List data={data.filter((item) => item.RCP_WAY2 === category)} />
				</Fragment>
			))}
		</>
	);
};
export default ListGroup;
