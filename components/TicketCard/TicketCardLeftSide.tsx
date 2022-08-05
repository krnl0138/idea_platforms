import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import React, { useContext } from "react";
import { TicketCardContext } from "./TicketCardContext";

export const TicketCardLeftSide = () => {
  const styleLeftSection = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    borderRight: "1px solid rgba(0,0,0,0.05)",
  };
  const styleButton = {
    textTransform: "none",
    color: "rgba(255,255,255,0.9)",
    backgroundColor: "rgb(255 109 0)",
    lineHeight: "1.3",
    boxShadow: "0 1px 1px rgba(0,0,0,0.6)",
  };
  const { price } = useContext(TicketCardContext);
  return (
    <Box sx={styleLeftSection}>
      <Box
        component="div"
        sx={{
          margin: "1.4rem",
        }}
      >
        <Image
          src="/TK.png"
          alt="TK logo"
          height="40"
          width="150"
          layout="responsive"
        />
      </Box>
      <Button sx={styleButton}>
        Купить
        <br /> за {price}₽
      </Button>
    </Box>
  );
};
