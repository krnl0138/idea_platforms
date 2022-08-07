import Box from "@mui/material/Box";
import React from "react";
import {
  styleGlobalBackgroundColor,
  styleGlobalBorderRadius,
  styleGlobalBoxShadow,
  styleGlobalTextColorTertiary,
} from "../../styles/variables";
import { styled } from "@mui/system";

const DivTicketsForm = styled("div")`
  /* background-color: red; */
  border-radius: ${styleGlobalBorderRadius};
  box-shadow: ${styleGlobalBoxShadow};
  color: ${styleGlobalTextColorTertiary};
  :ie11 #gridded {
    background-color: yellow;
  }
`;

const styleTicketFormMain = {
  bgcolor: styleGlobalBackgroundColor,
  borderRadius: styleGlobalBorderRadius,
  boxShadow: styleGlobalBoxShadow,
  color: styleGlobalTextColorTertiary,
  ":ie11": {
    backgroundColor: "red",
  },
};

export const TicketsForm = ({ children }) => {
  return <DivTicketsForm id="gridded">{children}</DivTicketsForm>;
  // <Box sx={styleTicketFormMain}>{children}</Box>;
};
