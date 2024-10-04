import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Title, List } from '../components/Blocks';

const Home = () => {
  const data = useLoaderData();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className='inner'>
        <Title h={1} title={'코알라 레시피'} />
        <List data={data} />
      </div>
    </div>
  );
};

export default Home;
