import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { BuyTicketButton } from "./TicketCardBuyTicketButton";
import { CarrierLogo } from "./TicketCardCarrierLogo";

const styleLeftSection = {
  display: "flex",
  width: "35%",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0 1.3rem 1.5rem",
  borderRight: "1px solid rgba(0,0,0,0.05)",
};

// eslint-disable-next-line react/display-name
export const TicketCardLeftSide = React.memo(() => {
  const [IE, setIE] = useState(false);
  useEffect(() => {
    if (!window["msCrypto"]) return;
    setIE(true);
  }, []);
  return (
    <Box sx={IE ? { ...styleLeftSection, width: "55%" } : styleLeftSection}>
      <CarrierLogo />
      <BuyTicketButton />
    </Box>
  );
});
