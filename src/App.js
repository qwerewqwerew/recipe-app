import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';

import { ThemeProvider } from './ThemeContext';
// 수정
import Root from './pages/Root';
import Home from './pages/Home';
import Category from './pages/Category';
import Detail from './pages/Detail';

const KEY = process.env.REACT_APP_KEY;

// router setting ////////////////////
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          try {
            const { data } = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${KEY}/COOKRCP01/json/1/30`);
            const {
              COOKRCP01: { row },
            } = data;
            return row;
          } catch (error) {
            console.error(error);
          }
        },
      },
      {
        path: 'category',
        element: <Category />,
        loader: async () => {
          try {
            const { data } = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${KEY}/COOKRCP01/json/1/50`);
            const {
              COOKRCP01: { row },
            } = data;

            return row;
          } catch (error) {
            console.error(error);
          }
        },
      },
      {
        path: ':id',
        element: <Detail />,
        loader: async ({ request, params }) => {
          try {
            const { data } = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${KEY}/COOKRCP01/json/1/1/RCP_NM=${params.id}`);
            return data.COOKRCP01.row[0];
          } catch (error) {
            console.error(error);
          }
        },
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
