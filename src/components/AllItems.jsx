import {
  Button,
  Container,
  Stack,
  TextField,
  Grid,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import CardLoading from "./CardLoading";

const AllItems = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  //pagination function
  const handleChange = (event, value) => {
    setPage(value);
  };

  //fetching data from api
  async function getAllItems() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/product/search?q=${text}`
      );
      const { products } = await response.json();
      setItems(products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    //debounce function
    const getData = setTimeout(() => {
      getAllItems();
    }, 1000);

    //cleanup function
    return () => clearTimeout(getData);
  }, [text]);
  return (
    <Container>
      <Stack display="flex" mt={2} alignItems="center" spacing={3}>
        <Stack display="flex" flexDirection={"row"} gap={1} alignItems="center">
          <TextField
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="search the product..."
            size="medium"
          />
          <Button variant="outlined" color="error" onClick={() => setText("")}>
            clear
          </Button>
        </Stack>
        <Grid container alignItems={"center"} spacing={2}>
          {isLoading ? (
            <CardLoading />
          ) : (
            items?.slice((page - 1) * 10, page * 10).map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <CardList data={item} />
              </Grid>
            ))
          )}
        </Grid>
        <Pagination
          count={items?.length / 10}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Container>
  );
};

export default AllItems;
