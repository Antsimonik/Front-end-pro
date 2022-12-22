import React from "react";
import { Link } from "react-router-dom";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Stack from "@mui/material/Stack";

function UsersTableItem({ user, deleteUser }) {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.city}</TableCell>
      <TableCell>{user.street}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to={`/${user.id}`}
            variant="contained"
            startIcon={<EditOutlinedIcon />}
          >
            Edit
          </Button>
          <Button
            onClick={() => deleteUser(user.id)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default UsersTableItem;
