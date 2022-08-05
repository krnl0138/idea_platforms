import { List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { TTicket } from "../utils/types";
import { TicketsListItem } from "./TicketsListItems";
import { v4 as uuidv4 } from "uuid";

type TTicketsList = {
  tickets: TTicket[];
};
export const TicketsList = ({ tickets }: TTicketsList) => {
  return (
    <Container sx={{ bgcolor: "pink" }}>
      <List>
        {tickets.map((ticket) => (
          <ListItem key={uuidv4()}>
            <TicketsListItem ticket={ticket} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
