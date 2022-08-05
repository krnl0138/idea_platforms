import Box from "@mui/material/Box";
import React from "react";
import { TicketCardTimeContainer } from "./TicketCardTimeContainer";
import { TicketCardTransfer } from "./TicketCardTransfer";

export const TicketCardRightSide = () => {
  const styleRightSection = {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    borderRight: "1px solid rgba(0,0,0,0.05)",
    color: "black",
  };
  return (
    <Box sx={styleRightSection}>
      <TicketCardTimeContainer />
      <TicketCardTimeContainer isDestination={true} />
      <TicketCardTransfer />
    </Box>
  );
};
