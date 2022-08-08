import { Box } from "@mui/material";
import React from "react";
import { useTicketCard } from "./TicketCardContext";

// eslint-disable-next-line react/display-name
export const CarrierLogo = React.memo(() => {
  const { carrier } = useTicketCard();
  return (
    <Box component="div" sx={{ margin: "1.5rem 1.5rem 1rem" }}>
      <img
        src={`../../${carrier}.png`}
        alt={`${carrier} logo`}
        height="40"
        width="120"
      />
    </Box>
  );
});
