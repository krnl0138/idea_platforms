import Box from "@mui/material/Box";
import React from "react";
import { TicketCardFlightInfo } from "./TicketCardFlightInfo";
import { TicketCardTransfer } from "./TicketCardTransfer";

const styleRightSection = {
  display: "flex",
  width: "100%",
  position: "relative",
  justifyContent: "space-between",
  padding: "1.5rem",
  borderRight: "1px solid rgba(0,0,0,0.05)",
  color: "black",
};

export const TicketCardRightSide = React.memo(() => {
  return (
    <Box sx={styleRightSection}>
      <TicketCardFlightInfo />
      <TicketCardFlightInfo isDestination={true} />
      <TicketCardTransfer />
    </Box>
  );
});

TicketCardRightSide.displayName = "TicketCardRightSide";
