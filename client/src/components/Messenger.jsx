import React from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar } from "@mui/material";

const Messenger = () => {
  return (
    <>
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <LoginDialog />
    </>
  );
};

export default Messenger;
