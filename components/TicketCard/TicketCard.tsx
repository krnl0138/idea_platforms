import { styled } from "@mui/system";
import React from "react";
import {
  styleGlobalBackgroundColor,
  styleGlobalBorderRadius,
  styleGlobalBoxShadow,
} from "../../styles/variables";
import { TicketCardLeftSide } from "./TicketCardLeftSide";
import { TicketCardRightSide } from "./TicketCardRightSide";

const DivGridTicketCard = styled("div")`
  width: 100%;
  display: flex;
  border-radius: ${styleGlobalBorderRadius};
  box-shadow: ${styleGlobalBoxShadow};
  background-color: ${styleGlobalBackgroundColor};
`;

// eslint-disable-next-line react/display-name
export const TicketCard = React.memo(() => {
  return (
    <DivGridTicketCard>
      <TicketCardLeftSide />
      <TicketCardRightSide />
    </DivGridTicketCard>
  );
});
