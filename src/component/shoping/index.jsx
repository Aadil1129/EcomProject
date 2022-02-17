import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Order from "../order";

export default function Shop(props) {
  return (
    <Card className="card-page" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            style={{ fontSize: "15px", fontWeight: "bold" }}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          >
            ${props.price}
          </Avatar>
        }
        title="T-shirt For Man"
      />
      <div className="off">{props.off} % Off</div>
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
      />
      <div className="card-stock">{props.stock} Stock's Available</div>
      <Order
        amount={props.price}
        newImage={props.image}
        percentage={props.off}
        Astock={props.stock}
      />
    </Card>
  );
}
