import Http from "./Http";

export default class Api {
	static postItem = async ({ bookmark, categoryId, minimumPrice, maximumPrice, sort, needCount }) => {
		console.log("목록 응답");
		try {
			let response = await Http.get(
				"/items/search",
				{
					params: {
						bookmark: bookmark,
						categoryId: categoryId,
						minimumPrice: minimumPrice,
						maximumPrice: maximumPrice,
						sort: sort,
						needCount: needCount,
					},
				},
				{ "Access-Control-Allow-Origin": "*" }
			);
			console.log("목록 확인", response);
			return response;
		} catch (error) {
			console.log("postItem", error);
			return error;
		}
	};

	static getCategory = async () => {
		console.log("카테고리 응답");
		try {
			let response = await Http.get("/categories", {}, { "Access-Control-Allow-Origin": "*" });
			console.log("카테고리 확인", response);
			return response;
		} catch (error) {
			console.log("getCategory", error);
			return error;
		}
	};

	static getBrand = async () => {
		console.log("브랜드 응답");
		try {
			let response = await Http.get("/brands", {}, { "Access-Control-Allow-Origin": "*" });
			console.log("브랜드 확인", response);
			return response;
		} catch (error) {
			console.log("getCategory", error);
			return error;
		}
	};
}
