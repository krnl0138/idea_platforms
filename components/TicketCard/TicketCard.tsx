import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import {
  styleGlobalBorderRadius,
  styleGlobalBoxShadow,
  styleGlobalBackgroundColor,
} from "../../styles/variables";
import { TTicket } from "../../utils/types";
import { TicketCardContext } from "./TicketCardContext";
import { TicketCardLeftSide } from "./TicketCardLeftSide";
import { TicketCardRightSide } from "./TicketCardRightSide";
import { TicketCardTransfer } from "./TicketCardTransfer";

// eslint-disable-next-line react/display-name
export const TicketCard = React.memo(() => {
  // console.log("Ticket Card was rendered!");
  const styleMainTicketContainer = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "35% 1fr",
    gridTemplateRows: '165px',
    borderRadius: styleGlobalBorderRadius,
    boxShadow: styleGlobalBoxShadow,
    bgcolor: styleGlobalBackgroundColor,
  };

  return (
    <Box sx={styleMainTicketContainer}>
      <TicketCardLeftSide />
      <TicketCardRightSide />
    </Box>
  );
});
