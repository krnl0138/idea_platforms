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
import { styled } from "@mui/system";

const DivGridTicketCard = styled("div")`
  /* @supports (display: grid) { */
  width: 100%;
  display: grid;
  grid-template-columns: 35% 1fr;
  grid-template-rows: 165px;
  -ms-grid-template-columns: 35% 1fr;
  -ms-grid-template-rows: 165px;
  border-radius: ${styleGlobalBorderRadius};
  box-shadow: ${styleGlobalBoxShadow};
  background-color: ${styleGlobalBackgroundColor};
  /* } */
`;

// eslint-disable-next-line react/display-name
export const TicketCard = React.memo(() => {
  const styleMainTicketContainer = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "35% 1fr",
    gridTemplateRows: "165px",
    "-ms-gridTemplateColumns": "35% 1fr",
    "-ms-gridTemplateRows": "165px",
    borderRadius: styleGlobalBorderRadius,
    boxShadow: styleGlobalBoxShadow,
    bgcolor: styleGlobalBackgroundColor,
  };

  return (
    <DivGridTicketCard>
      {/* <Box sx={styleMainTicketContainer}> */}
      <TicketCardLeftSide />
      <TicketCardRightSide />
      {/* </Box> */}
    </DivGridTicketCard>
  );
});
