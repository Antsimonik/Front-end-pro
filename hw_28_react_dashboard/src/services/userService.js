const API = `https://633357a1573c03ab0b5c6efb.mockapi.io/reactHw28`;

export const getUsers = () => fetch(API).then((data) => data.json());

export const getUser = (id) =>
  fetch(API + `/${id}`).then((data) => data.json());

export const deleteUser = (id) =>
  fetch(API + `/${id}`, {
    method: `DELETE`,
  }).then((data) => data.json());

export const updateUser = (id, obj) =>
  fetch(API + `/${id}`, {
    method: `PUT`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((data) => data.json());

export const addUser = (obj) =>
  fetch(API, {
    method: `POST`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((data) => data.json());
