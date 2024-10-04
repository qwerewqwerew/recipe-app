import { Outlet, useNavigation } from 'react-router-dom';
import Navi from '../components/Navi';
import './Theme.css';

import './Theme.css';
const Root = () => {
  const loading = useNavigation();
  return (
    <>
      <Navi />
      {loading.state === 'loading' ? (
        <p
          style={{
            position: 'fixed',
            top: '20%',
            left: '25%',
            fontSize: '3em',
          }}
        >
          로딩중입니다..
        </p>
      ) : (
        <Outlet />
      )}
    </>
  );
};
export default Root;
