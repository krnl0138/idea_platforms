import { Box } from "@mui/material";
import React from "react";
import { TTicket } from "../../utils/types";
import { TicketCardContext } from "./TicketCardContext";
import { TicketCardLeftSide } from "./TicketCardLeftSide";
import { TicketCardRightSide } from "./TicketCardRightSide";
import { TicketCardTransfer } from "./TicketCardTransfer";

type TTicketCard = { ticket: TTicket; index: number };
export const TicketCard = ({ ticket, index }: TTicketCard) => {
  const styleMainTicketContainer = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "36% 1fr",
    borderRadius: "5px",
    boxShadow: "0px 2px 3px rgba(0,0,0,0.2)",
    bgcolor: "rgba(255,255,255)",
  };

  const contextValue = { ...ticket, index };
  return (
    <TicketCardContext.Provider value={contextValue}>
      <Box sx={styleMainTicketContainer}>
        <TicketCardLeftSide />
        <TicketCardRightSide />
      </Box>
    </TicketCardContext.Provider>
  );
};
