import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  styleGlobalBluePrimary,
  styleGlobalBluePrimaryIE11,
  styleGlobalBlueSecondary,
  styleGlobalBlueSecondaryIE11,
  styleGlobalBlueTertiary,
  styleGlobalBlueTertiaryIE11,
  styleGlobalBorderRadius,
  styleGlobalGray,
  styleGlobalWhite,
} from "../../styles/variables";
import { isIE11Context } from "../../utils/functions";
import { TCurrencies } from "../../utils/types";
import {
  styleTicketFormHeading,
  styleTicketsFormText,
} from "./stylesTicketForm";

const styleMain = { marginBottom: "2rem" };

const styleButtonGroup = {
  padding: "0 1rem",
};

const styleButton = {
  padding: "0.5rem 1.3rem",
  fontSize: styleTicketsFormText,
  letterSpacing: 0,
  color: styleGlobalBluePrimary,
  borderRadius: styleGlobalBorderRadius,
  border: `1px solid ${styleGlobalGray}`,
  "&:hover": {
    border: `1px solid ${styleGlobalBluePrimary}`,
    bgcolor: styleGlobalBlueSecondary,
  },
};

const styleButtonActive = {
  ...styleButton,
  color: styleGlobalWhite,
  bgcolor: styleGlobalBlueTertiary,
  "&:hover": {
    bgcolor: styleGlobalBlueTertiary,
  },
};

type TTicketsFormCurrency = {
  currency: TCurrencies;
  handleCurrency: (currency: TCurrencies) => void;
};
// eslint-disable-next-line react/display-name
export const TicketsFormCurrency = React.memo(
  ({ currency, handleCurrency }: TTicketsFormCurrency) => {
    const [IE, setIE] = useState(false);
    useEffect(() => {
      if (!isIE11Context()) return;
      setIE(true);
    }, []);
    const button = IE
      ? {
          ...styleButton,
          "&:hover": {
            border: `1px solid ${styleGlobalBluePrimaryIE11}`,
            bgcolor: styleGlobalBlueSecondaryIE11,
          },
        }
      : styleButton;
    const buttonActive = IE
      ? {
          ...styleButtonActive,
          bgcolor: styleGlobalBlueTertiaryIE11,
          "&:hover": {
            bgcolor: styleGlobalBlueTertiaryIE11,
          },
        }
      : styleButtonActive;

    const CurrencyButton = ({ curr }: { curr: TCurrencies }) => (
      <Button
        sx={currency === curr ? buttonActive : button}
        onClick={() => handleCurrency(curr)}
        component="button"
      >
        {curr}
      </Button>
    );

    return (
      <Box sx={styleMain}>
        <Typography sx={{ ...styleTicketFormHeading, paddingTop: "1rem" }}>
          Валюта
        </Typography>
        <ButtonGroup
          size="small"
          variant="outlined"
          aria-label="outlined primary button group"
          sx={styleButtonGroup}
        >
          <CurrencyButton curr="rub" />
          <CurrencyButton curr="usd" />
          <CurrencyButton curr="eur" />
        </ButtonGroup>
      </Box>
    );
  }
);
