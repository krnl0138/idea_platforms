import { Box, Typography } from "@mui/material";
import {
  styleGlobalGray,
  styleGlobalTextColorSecondary,
} from "../../styles/variables";
import { formatWordEnding } from "../../utils/functions";
import { useTicketCard } from "./TicketCardContext";

const styleMain = {
  position: "absolute",
  top: "19%",
  right: "41%",
  color: styleGlobalTextColorSecondary,
  textAlign: "center",
  textTransform: "uppercase",
  "::before": {
    content: "''",
    position: "absolute",
    left: "1.7rem",
    bottom: "-5px",
    transform: "translateX(-50%)",
    width: "6.5rem",
    borderBottom: `1px solid ${styleGlobalGray}`,
  },
  "::after": {
    content: "''",
    position: "absolute",
    bottom: "-.6rem",
    right: "-1.5rem",
    transform: "rotate(45deg)",
    width: "10px",
    height: "10px",
    backgroundImage: `url(/plane-icon.svg)`,
    backgroundSize: "10px 10px",
    backgroundRepeat: "no-repeat",
    filter: "opacity(0.15)",
  },
};

const styleTransferText = {
  fontWeight: 700,
  fontSize: "0.65rem",
  lineHeight: "1.6",
  letterSpacing: "-0.07em",
};

export const TicketCardTransfer = () => {
  const { stops } = useTicketCard();
  return (
    <Box id="test" component="div" sx={styleMain}>
      <Typography sx={styleTransferText}>{formatWordEnding(stops)}</Typography>
    </Box>
  );
};
