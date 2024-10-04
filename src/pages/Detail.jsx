import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Title } from '../components/Blocks';

function Detail() {
  const data = useLoaderData();

  return (
    <div className='inner'>
      <Title h={1} title={data.RCP_NM} />
      <img src={data.ATT_FILE_NO_MAIN} alt={data.RCP_NM} />

      <div>
        <Title h={2} title='재료' />
        <IngredientList data={data} />
      </div>
      <div>
        <Title h={2} title='조리방법' />
        {data.RCP_WAY2}
      </div>
      <div>
        <Title h={2} title='만들어보기' />
        <RecipeManual data={data} />
      </div>
      <div>{data.MANUAL01}</div>
    </div>
  );
}

// 재료목록 ////////////////////
function IngredientList({ data }) {
  const parts = data.RCP_PARTS_DTLS.split('\n');
  const ingredient = parts.map((part) => part.split(','));

  return (
    <ul>
      {ingredient.map((el, idx) => (
        <li key={idx}>
          <strong>{el[0]}</strong>
          <ul>
            {el.slice(1).map((item, idx2) => (
              <li key={idx2}>{item.trim()}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

// 레시피메뉴얼 ////////////////////
function RecipeManual({ data }) {
  const manualSteps = [];
  for (let i = 1; i <= 20; i++) {
    const manualText = data[`MANUAL${i.toString().padStart(2, '0')}`];
    const manualImage = data[`MANUAL_IMG${i.toString().padStart(2, '0')}`];
    if (manualText) {
      manualSteps.push({ text: manualText, image: manualImage });
    }
  }

  return (
    <div className='manual'>
      {manualSteps.map((step, index) => (
        <div key={index} className='manual step'>
          <p>{step.text}</p>
          {step.image && <img src={step.image} alt={`${data.RCP_NM}`} />}
        </div>
      ))}
    </div>
  );
}

export default Detail;
