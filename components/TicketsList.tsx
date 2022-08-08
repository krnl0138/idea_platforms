import { Box, CircularProgress, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TTicket } from "../utils/types";
import { TicketCard } from "./TicketCard/TicketCard";
import { TicketCardContext } from "./TicketCard/TicketCardContext";

const styleListItem = {
  ":first-of-type": { paddingTop: 0 },
  ":last-of-type": { paddingBottom: 0 },
};

type TTicketsList = {
  tickets: TTicket[];
  data: { currency: string; transfer: number[] };
};
// eslint-disable-next-line react/display-name
export const TicketsList = React.memo(({ data, tickets }: TTicketsList) => {
  const { currency, transfer } = data;
  const [filtered, setFiltered] = useState<TTicket[]>([]);

  useEffect(() => {
    if (!tickets) return;
    if (!transfer || transfer.length === 0 || transfer.includes(-1)) {
      setFiltered(tickets);
      return;
    }

    const result = tickets.filter((ticket) => {
      for (const t of transfer) {
        if (ticket.stops === t) return true;
      }
    });
    const sorted = result.sort((a, b) => a.stops - b.stops);
    setFiltered(sorted);
  }, [tickets, transfer]);

  return tickets.length > 0 ? (
    <Box sx={{ width: "100%" }}>
      <List disablePadding={true}>
        {filtered.length > 0 &&
          filtered.map((ticket, i) => (
            <ListItem key={uuidv4()} disableGutters={true} sx={styleListItem}>
              <TicketCardContext.Provider value={{ ...ticket, currency }}>
                <TicketCard />
              </TicketCardContext.Provider>
            </ListItem>
          ))}
      </List>
    </Box>
  ) : (
    <CircularProgress />
  );
});
