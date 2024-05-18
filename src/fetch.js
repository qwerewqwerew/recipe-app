export const fetchDB = async () => {
	try {
		let row = await fetch('http://openapi.foodsafetykorea.go.kr/api/08cc9b42270a4439b1b5/COOKRCP01/json/1/5');
		let db = await row.json();
		return db;
	} catch (error) {
		console.error(error);
	}
};
