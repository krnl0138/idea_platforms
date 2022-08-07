import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTicketCard } from "./TicketCardContext";

export const CarrierLogo = React.memo(() => {
  const { carrier } = useTicketCard();
  return (
    <Box component="div" sx={{ margin: "1.5rem 1.5rem 1rem" }}>
      <Image
        src={`/${carrier}.webp`}
        alt={`${carrier} logo`}
        height="40"
        width="140"
        layout="responsive"
        priority={true}
      />
    </Box>
  );
});
CarrierLogo.displayName = "CarrierLogo";
