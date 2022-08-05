import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { TTicket } from "../utils/types";

type TTicketsListItem = { ticket: TTicket };
export const TicketsListItem = ({ ticket }: TTicketsListItem) => {
  return (
    <Container sx={{ bgcolor: "orange" }}>
      <Typography>TicketsListItem</Typography>
    </Container>
  );
};
