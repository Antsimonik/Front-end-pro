const API_Product = `https://634e9f834af5fdff3a625f84.mockapi.io/products`;

export const getList = () => fetch(API_Product).then((data) => data.json());
