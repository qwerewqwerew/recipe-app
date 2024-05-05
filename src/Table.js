import Plate from './Plate';
const Table = () => {
	return (
		<>
			<Plate fav='햄버거' something={true} papapa={['hello', 1, 2, 3, 4, true]} />
			<Plate fav='딸기' something={false} papapa={['hello', 1, 2, 3, 4, true]} />
			<Plate fav='사과' something={true} papapa={['hello', 1, 2, 3, 4, true]} />
		</>
	);
};
export default Table;
