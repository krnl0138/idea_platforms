import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  styleGlobalTextColorPrimary,
  styleGlobalTextColorSecondary,
} from "../../styles/variables";
import { makeNaturalDate } from "../../utils/functions";
import { useTicketCard } from "./TicketCardContext";

const FlightInfoTime = ({ time }: { time: string }) => {
  const styleTime = {
    color: styleGlobalTextColorPrimary,
    fontSize: "2.2rem",
    fontWeight: "100",
    lineHeight: "1.2",
    marginBottom: "3px",
  };
  return (
    <Typography component="p" sx={styleTime}>
      {time}
    </Typography>
  );
};
const FlightInfoPlace = ({
  airport,
  city,
}: {
  airport: string;
  city: string;
}) => {
  const styleText = {
    color: styleGlobalTextColorPrimary,
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "-0.03em",
  };
  return (
    <Typography component="p" sx={styleText}>
      {airport}, {city}
    </Typography>
  );
};
const FlightInfoDate = ({ date }: { date: string }) => {
  const styleTextSecondary = {
    color: styleGlobalTextColorSecondary,
    fontWeight: 400,
    fontSize: "0.8rem",
    lineHeight: 1.2,
    letterSpacing: "-0.03em",
  };
  return (
    <Typography component="p" sx={styleTextSecondary}>
      {makeNaturalDate(date)}
    </Typography>
  );
};

type TTicketCardFlightInfo = {
  isDestination?: boolean;
};
export const TicketCardFlightInfo = ({
  isDestination = false,
}: TTicketCardFlightInfo) => {
  const styleMainContainer = {
    display: "flex",
    flexDirection: "column",
  };
  const {
    arrival_date,
    arrival_time,
    departure_date,
    departure_time,
    destination,
    destination_name,
    origin,
    origin_name,
  } = useTicketCard();
  return (
    <Box
      sx={
        isDestination
          ? { ...styleMainContainer, alignItems: "flex-end" }
          : styleMainContainer
      }
    >
      <FlightInfoTime time={isDestination ? arrival_time : departure_time} />
      <FlightInfoPlace
        airport={isDestination ? destination_name : origin}
        city={isDestination ? destination : origin_name}
      />
      <FlightInfoDate date={isDestination ? arrival_date : departure_date} />
    </Box>
  );
};
