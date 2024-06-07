import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Rating,
  Chip,
  CardActions,
  Button,
} from "@mui/material";

const CardList = ({ data }) => {
  return (
    <Card elevation={2} sx={{ maxWidth: 340, paddingBottom: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.thumbnail}
        title={data.title}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
          {data.brand}
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ color: "gray", textTransform: "capitalize" }}
        >
          {data.category}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {data.description.slice(0, 100) + "...."}
        </Typography>
        <Typography
          variant="p"
          color="text.secondary"
          sx={{ fontWeight: 600, fontSize: "20px" }}
        >
          ₹ {data.price}
        </Typography>
        <Typography
          variant="p"
          color="text.secondary"
          sx={{ fontWeight: 600, fontSize: "20px" }}
        >
          In stock:{" "}
          <Chip label={data.stock} color="success" variant="outlined" />
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={data.rating}
          precision={0.5}
          readOnly
        />
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
  );
};

export default CardList;
