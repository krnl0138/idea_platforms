import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { styleGlobalTextColorSecondary } from "../../styles/variables";
import { formatWordEnding } from "../../utils/functions";
import { TicketCardContext } from "./TicketCardContext";

export const TicketCardTransfer = () => {
  const styleMain = {
    position: "absolute",
    top: "15%",
    right: "24%",
    color: styleGlobalTextColorSecondary,
    textAlign: "center",
    padding: "0 1rem .2rem .8rem",
    borderBottom: `1px solid ${styleGlobalTextColorSecondary}`,
    textTransform: "uppercase",
    "::before": {
      content: "''",
      position: "absolute",
      bottom: "-5px",
      right: "-11px",
      transform: "rotate(45deg)",
      width: "10px",
      height: "10px",
      backgroundImage: `url(/plane-icon.svg)`,
      backgroundSize: "10px 10px",
      backgroundRepeat: "no-repeat",
      filter: "opacity(0.2)",
    },
  };

  const { index } = useContext(TicketCardContext);
  return (
    <Box sx={styleMain}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "0.6rem",
          lineHeight: "1.8",
          letterSpacing: "-0.07em",
        }}
      >
        {formatWordEnding(index)}
      </Typography>
    </Box>
  );
};
