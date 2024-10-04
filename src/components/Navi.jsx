import { NavLink } from 'react-router-dom';

const Navi = (props) => {
  return (
    <nav>
      <div className='inner'>
        <NavLink to='/' end>
          메인화면
        </NavLink>
        <NavLink to='category'>
          카테고리
        </NavLink>
      </div>
    </nav>
  );
};
export default Navi;
