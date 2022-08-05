import { Box, List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { TTicket } from "../utils/types";
import { TicketCard } from "./TicketCard/TicketCard";
import { v4 as uuidv4 } from "uuid";

type TTicketsList = {
  tickets: TTicket[];
};
export const TicketsList = ({ tickets }: TTicketsList) => {
  return (
    <Box sx={{ bgcolor: "pink" }}>
      <List disablePadding={true}>
        {tickets.map((ticket, index) => (
          <ListItem
            key={uuidv4()}
            disableGutters={true}
            sx={{
              ":first-child": { paddingTop: 0 },
              ":last-child": { paddingBottom: 0 },
            }}
          >
            <TicketCard ticket={ticket} index={index + 1} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
