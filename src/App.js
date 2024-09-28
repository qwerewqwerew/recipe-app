import axios from "axios";
import { useState, useEffect } from "react";
import ListGroup from "./components/ListGroup";
function App() {
  const [loading, setLoading] = useState({ state: true, data: [] });
  const getDB = async () => {
    try {
      const { data } = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/내서비스키/COOKRCP01/json/1/100`);
      const {
        COOKRCP01: { row },
      } = data;
      const initData = row.map(({ RCP_SEQ, RCP_NM, RCP_WAY2, ATT_FILE_NO_MAIN }) => ({
        RCP_SEQ,
        RCP_NM,
        RCP_WAY2,
        ATT_FILE_NO_MAIN,
      }));
      setLoading({ state: false, data: initData });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDB();
  }, []);

  return (
    <div className="App">
      {loading.state ? (
        <h1>로딩중입니다...</h1>
      ) : (
        <div className="inner">
          <ListGroup data={loading.data} />
        </div>
      )}
    </div>
  );
}

export default App;
