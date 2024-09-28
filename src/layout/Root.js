import { Outlet } from 'react-router-dom';
import App from '../App';
import Navi from './Navi';

const Root = (props) => {
	return (
		<App>
			<Navi />
			<Outlet />
		</App>
	);
};
export default Root;
