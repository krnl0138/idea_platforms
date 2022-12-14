import Box from "@mui/material/Box";
import React from "react";
import {
  styleGlobalBackgroundColor,
  styleGlobalBorderRadius,
  styleGlobalBoxShadow,
  styleGlobalTextColorTertiary,
} from "../../styles/variables";

const styleTicketFormMain = {
  bgcolor: styleGlobalBackgroundColor,
  borderRadius: styleGlobalBorderRadius,
  boxShadow: styleGlobalBoxShadow,
  color: styleGlobalTextColorTertiary,
  marginRight: "1.2rem",
};

export const TicketsForm = ({ children }) => {
  return <Box sx={styleTicketFormMain}>{children}</Box>;
};
