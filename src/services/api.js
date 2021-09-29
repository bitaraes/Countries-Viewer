const BASE_URL = "http://api.countrylayer.com/v2";
const key = "?access_key=616462fdec0f18b0cfee7e1a977e718f";

export async function findAllCountries() {
	const url = `${BASE_URL}/all${key}`;
	const response = await fetch(url, { method: "GET" });
	const json = await response.json();
	const res = Array.from(json);
	return res;
}
