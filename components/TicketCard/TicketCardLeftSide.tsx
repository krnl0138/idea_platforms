import Box from "@mui/material/Box";
import React from "react";
import { BuyTicketButton } from "./TicketCardBuyTicketButton";
import { CarrierLogo } from "./TicketCardCarrierLogo";

const styleLeftSection = {
  display: "flex",
  flexDirection: "column",
  justifyContent: 'center',
  padding: "0 1.2rem 1rem",
  borderRight: "1px solid rgba(0,0,0,0.05)",
};

// eslint-disable-next-line react/display-name
export const TicketCardLeftSide = React.memo(() => {
  return (
    <Box sx={styleLeftSection}>
      <CarrierLogo />
      <BuyTicketButton />
    </Box>
  );
});
