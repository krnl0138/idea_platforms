import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { InfoTicketsForm } from "../components/InfoTicketsForm";
import { TicketsList } from "../components/TicketsList";
import { Layout } from "../components/utils/Layout";
import TICKETS from "../utils/tickets.json";
import { TTicket } from "../utils/types";

const styleMainContainer = {};

export const Index = () => {
  return (
    <Layout>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "1.5rem",
          marginTop: "3rem",
        }}
      >
        <Box>
          <InfoTicketsForm />
        </Box>
        <TicketsList tickets={TICKETS.tickets} />
      </Container>
    </Layout>
  );
};

export default Index;
