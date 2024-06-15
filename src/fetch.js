export const fetchDB = async () => {
	try {
		let row = await fetch('http://openapi.foodsafetykorea.go.kr/api/서비스키/COOKRCP01/json/1/5');
		let db = await row.json();
		return db;
	} catch (error) {
		console.error(error);
	}
};
