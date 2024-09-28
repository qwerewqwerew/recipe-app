import './List.css';

const List = ({ data }) => {
	return (
		<div className='group'>
			{data.map(({ RCP_SEQ, RCP_NM, ATT_FILE_NO_MAIN, RCP_WAY2 }) => (
				<div key={RCP_SEQ} className='list'>
					<img src={ATT_FILE_NO_MAIN} alt={RCP_NM} />
					<div className='list-txt-wrap'>
						<div className='list-txt-title'>{RCP_NM}</div>
						<div className='list-txt-way'>{RCP_WAY2}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default List;
