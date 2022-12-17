import { useState, useEffect } from "react";
import { getUsers, deleteUser as deleteItem } from "./../services/userService";

export default function useUsers(props) {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setUsers(await getUsers());
      setLoading(false);
    })();
  }, []);

  const deleteUser = async (id) => {
    await deleteItem(id);
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  return { users, deleteUser, isLoading };
}
