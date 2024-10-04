import { useLoaderData } from 'react-router-dom';
import { List, Title } from '../components/Blocks';
const Category = () => {
  const data = useLoaderData();

  //data.RCP_PAT2 의 중복값을 제거후 categories 배열에 할당
  const categories = [...new Set(data.map((data) => data.RCP_PAT2))];
  return (
    <>
      <div className='inner'>
        <Title h={1} title={'카테고리'} />
        {categories.map((category, index) => {
          const groupedData = data.filter((el) => el.RCP_PAT2 === category);

          return (
            <div key={index}>
              <Title h={2} title={category} />
              <List data={groupedData} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Category;
