import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import moment from "moment";
import "moment/locale/ru";
import React, { useContext } from "react";
import {
  styleGlobalTextColorPrimary,
  styleGlobalTextColorSecondary,
} from "../../styles/variables";
import { makeNaturalDate } from "../../utils/functions";
import { TicketCardContext } from "./TicketCardContext";

type TTicketCardTimeContainer = {
  isDestination?: boolean;
};
export const TicketCardTimeContainer = ({
  isDestination = false,
}: TTicketCardTimeContainer) => {
  const {
    departure_time,
    origin,
    origin_name,
    departure_date,
    arrival_time,
    arrival_date,
    destination_name,
    destination,
  } = useContext(TicketCardContext);
  const styleMainContainer = {
    // bgcolor: "aliceblue",
    display: "flex",
    flexDirection: "column",
  };
  const styleTime = {
    color: styleGlobalTextColorPrimary,
    fontSize: "2rem",
    fontWeight: "100",
    lineHeight: "1.2",
    marginBottom: "3px",
  };
  const StyleText = {
    color: styleGlobalTextColorPrimary,
    fontWeight: 700,
    fontSize: "0.75rem",
    letterSpacing: "-0.03em",
  };
  const StyleTextSecondary = {
    color: styleGlobalTextColorSecondary,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.2,
    letterSpacing: "-0.03em",
  };
  return (
    <Box
      sx={
        isDestination
          ? { ...styleMainContainer, alignItems: "flex-end" }
          : styleMainContainer
      }
    >
      <Typography component="p" sx={styleTime}>
        {isDestination ? arrival_time : departure_time}
      </Typography>
      <Typography component="p" sx={StyleText}>
        {isDestination ? destination_name : origin},{" "}
        {isDestination ? destination : origin_name}
      </Typography>
      <Typography component="p" sx={StyleTextSecondary}>
        {isDestination
          ? makeNaturalDate(arrival_date)
          : makeNaturalDate(departure_date)}
      </Typography>
    </Box>
  );
};
