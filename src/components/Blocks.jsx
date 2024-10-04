import { useNavigate } from 'react-router-dom';
// List Comp /////////////////
const List = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = (RCP_NM) => {
    navigate(`/${RCP_NM}`);
  };

  return (
    <div className='group'>
      {data.map(({ RCP_SEQ, RCP_NM, ATT_FILE_NO_MAIN, RCP_WAY2 }) => (
        <div key={RCP_SEQ} className='list' onClick={() => handleClick(RCP_NM)}>
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

// Title Comp /////////////////
const Title = ({ title, h }) => {
  const Tag = `h${h}`;
  return <Tag className='title'>{title}</Tag>;
};

// Exports /////////////////
export { List, Title };
