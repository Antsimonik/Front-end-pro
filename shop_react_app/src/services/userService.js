const API_User = `https://633357a1573c03ab0b5c6efb.mockapi.io/reactHw28`;

export const getUsers = () => fetch(API_User).then((data) => data.json());

// export const getUser = (id) =>
//   fetch(API_User + `/${id}`).then((data) => data.json());

// export const deleteUser = (id) =>
//   fetch(API_User + `/${id}`, {
//     method: `DELETE`,
//   }).then(data.json());

// export const updateUser = (id, obj) =>
//   fetch(API_User + `/${id}`, {
//     method: `PUT`,
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   }).then((data) => data.json());

export const addUser = (obj) =>
  fetch(API_User, {
    method: `POST`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((data) => data.json());
