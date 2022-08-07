import { Box, FormControl, FormGroup, Typography } from "@mui/material";
import React from "react";
import {
  styleTicketFormHeading,
  styleTicketsFormText,
} from "./stylesTicketForm";
import { TransferCheckbox } from "./TransferCheckbox";

const styleMain = { paddingBottom: "1rem" };

const styleFormControl = {
  width: "100%",
  " span": { fontSize: styleTicketsFormText, padding: "5px" },
};

// eslint-disable-next-line react/display-name
export const TicketsFormTransfer = React.memo(
  ({
    handleTransfer,
  }: {
    handleTransfer: (transfer: number, only?: boolean) => void;
  }) => {
    return (
      <Box sx={styleMain}>
        <Typography sx={styleTicketFormHeading}>
          Количество пересадок
        </Typography>
        <FormControl
          sx={styleFormControl}
          component="fieldset"
          variant="standard"
        >
          <FormGroup>
            <TransferCheckbox
              label="Все"
              transferValue={-1}
              handleTransfer={handleTransfer}
            />
            <TransferCheckbox
              label="Без пересадок"
              transferValue={0}
              handleTransfer={handleTransfer}
            />
            <TransferCheckbox
              label="1 пересадка"
              transferValue={1}
              handleTransfer={handleTransfer}
            />
            <TransferCheckbox
              label="2 пересадки"
              transferValue={2}
              handleTransfer={handleTransfer}
            />
            <TransferCheckbox
              label="3 пересадки"
              transferValue={3}
              handleTransfer={handleTransfer}
            />
          </FormGroup>
        </FormControl>
      </Box>
    );
  }
);
