import React, { Fragment } from "react";
import UsersTable from "../components/Users/UsersTable";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

function Dashboard() {
  return (
    <Fragment>
      <h1>Users</h1>
      <Button
        sx={{ mb: 3, backgroundColor: `#26bee3` }}
        component={Link}
        to="/create"
        variant="contained"
      >
        Create user
      </Button>
      <UsersTable />
    </Fragment>
  );
}

export default Dashboard;
