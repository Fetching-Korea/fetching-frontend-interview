import Fetch from 'controllers/fetch';

/**
 * 상품 목록 호출 API
 * @version 1
 *
 * @param {object} bookmark 이전 bookmark 정보
 * @param {number} categoryId 카테고리 ID
 * @param {number} brandId 브랜드 ID
 * @param {number} minimumPrice 최소 가격
 * @param {number} maximumPrice 최대 가격
 * @param {number} sort 정렬 (0: 최신순, 1: 할인율, 2: 낮은 가격, 3: 높은 가격)
 * @param {*} needCount Count 반환 여부
 */
export const getItems = (
  bookmark,
  categoryId,
  brandId,
  minimumPrice,
  maximumPrice,
  sort,
  needCount,
) => {
  const sendData = {
    bookmark: bookmark ? bookmark : {},
    categoryId,
    brandId,
    minimumPrice: minimumPrice ? minimumPrice : 0,
    maximumPrice: maximumPrice ? maximumPrice : 99999999999999999,
    sort,
    needCount,
  };
  return Fetch('/api/items/search', 'POST', sendData).then(res => {
    console.log(res);
    if (res) return res;
    else return Promise.reject(res);
  });
};
