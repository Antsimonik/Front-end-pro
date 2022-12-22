const API = `https://633357a1573c03ab0b5c6efb.mockapi.io/product`;

export const getList = () => fetch(API).then((data) => data.json());

export const deleteItem = (id) =>
  fetch(API + `/${id}`, { method: `DELETE` }).then((data) => data.json());

export const updateItem = (id, obj) =>
  fetch(API + `/${id}`, {
    method: `PUT`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((data) => data.json());

export const addItem = (obj) =>
  fetch(API, {
    method: `POST`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((data) => data.json());
