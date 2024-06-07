import React from "react";
import { Typography, Stack } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  return (
    <>
      <ToastContainer />
      <Stack p={2} textAlign={"center"} bgcolor={"skyblue"}>
        <Typography variant="h4" component="h2">
          Products
        </Typography>
      </Stack>
    </>
  );
};

export default Navbar;
