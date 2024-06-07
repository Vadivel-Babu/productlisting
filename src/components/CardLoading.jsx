import { Skeleton, Stack } from "@mui/material";
import React from "react";

const CardLoading = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      gap={2}
      direction={"row"}
    >
      {arr.map((i) => (
        <Skeleton key={i} variant="rounded" width={210} height={250} />
      ))}
    </Stack>
  );
};

export default CardLoading;
