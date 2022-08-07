import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import { TicketsForm } from "../components/TicketsForm/TicketsForm";
import { TicketsFormCurrency } from "../components/TicketsForm/TicketsFormCurrency";
import { TicketsFormTransfer } from "../components/TicketsForm/TicketsFormTransfer";
import { TicketsList } from "../components/TicketsList";
import { Layout } from "../components/utils/Layout";
import TICKETS from "../utils/tickets.json";
import { TCurrencies } from "../utils/types";
import { red } from "@mui/material/colors";

// const styleMainContainer = {
//   "@supports (display: gridx)": {
//     display: "grid",
//     gridTemplateColumns: "28% 1fr",
//     gap: "1.2rem",
//     bgcolor: "red",
//   },

//   "@supports not (display: grid)": {
//     bgcolor: "yellow",
//     display: "flex",
//     marginTop: "5rem",
//   },
//   marginTop: "2rem",
//   padding: 0,
//   "@media": { padding: 0 },
// };

const MyMainContainer = styled("div")`
  @supports (display: grid) {
    /* display: flex; */
    display: grid;
    grid-template-columns: 28% 1fr;
    /* -ms-grid-template-columns: 28% 1fr; */
    gap: 1.2rem;
    /* -ms-gap: 1.2rem; */
    background-color: red;
  }
  @supports not (display: grid) {
    background-color: yellow;
    display: flex;
    margin-top: 5rem;
  }
  margin-top: 2rem;
  padding: 0;
  @media (all) {
    padding: 0;
  }
  :ie11 {
    background-color: navy;
  }
`;

/**
 * Provide `AppWrapper` to colocate the state and avoid unnecessary re-renders
 */
const AppWrapper = () => {
  const [currency, setCurrency] = useState<TCurrencies>("rub");
  const [transfer, setTransfer] = useState<number[]>([-1]);
  const data = { currency, transfer };

  const handleCurrency = (currency: TCurrencies) => setCurrency(currency);

  const handleTransfer = (option: number, only?: boolean) => {
    if (!transfer)
      throw new Error("Transfer state was not found. Something is wrong");
    if (only) {
      setTransfer([option]);
      return;
    }
    // 1. the option is already in state, remove it
    if (transfer.includes(option)) {
      const filtered = transfer.filter((el) => el !== option);
      filtered.length === 0 ? setTransfer([-1]) : setTransfer(filtered);
      return;
    }
    // 2. the option isn't in state and state is empty
    if (transfer.length === 1 && transfer[0] === -1) {
      setTransfer([option]);
      return;
    }
    // 3. the option isn't in state and state isn't empty
    setTransfer([...transfer, option]);
  };

  return (
    <MyMainContainer>
      <Box>
        <TicketsForm>
          <TicketsFormCurrency
            currency={currency}
            handleCurrency={handleCurrency}
          />
          <TicketsFormTransfer handleTransfer={handleTransfer} />
        </TicketsForm>
      </Box>
      <TicketsList data={data} tickets={TICKETS.tickets} />
    </MyMainContainer>
  );
};

export const Index = () => {
  return (
    <Layout>
      <AppWrapper />
    </Layout>
  );
};

export default Index;
