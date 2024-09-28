import { Outlet } from 'react-router-dom';
import Navi from './Navi';
const RootLayout = (props) => {
	return (
		<>
			<div>RootLayout</div>
			<Navi />
			<Outlet />
		</>
	);
};
export default RootLayout;
