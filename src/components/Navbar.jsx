import React from "react";
import { Typography, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack p={2} textAlign={"center"} bgcolor={"skyblue"}>
      <Typography variant="h4" component="h2">
        Products
      </Typography>
    </Stack>
  );
};

export default Navbar;
