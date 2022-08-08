import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import {
  styleGlobalOrange,
  styleGlobalOrangeIE11,
  styleGlobalWhite,
} from "../../styles/variables";
import { useTicketCard } from "./TicketCardContext";

const styleButton = {
  textTransform: "none",
  color: styleGlobalWhite,
  backgroundColor: styleGlobalOrange,
  lineHeight: "1.3",
  padding: "8px",
  boxShadow: "0 1px 1px rgba(0,0,0,0.6)",
  fontSize: "1rem",
  ":hover": {
    backgroundColor: styleGlobalOrange,
  },
};

export const BuyTicketButton = () => {
  const { price, currency } = useTicketCard();
  const [IE, setIE] = useState(false);
  useEffect(() => {
    if (!window["msCrypto"]) return;
    setIE(true);
  }, []);

  const formatPriceByCurrency = (price: number, currency: string): string => {
    /* Handle IE11 case */
    if (
      navigator.userAgent.indexOf("MSIE") !== -1 ||
      navigator.appVersion.indexOf("Trident/") > -1
    ) {
      // is IE11
      /* Microsoft Internet Explorer detected in. */
      const symbol =
        currency === "rub"
          ? "₽"
          : currency === "eur"
          ? "€"
          : currency === "usd"
          ? "$"
          : "";
      return `${symbol} ${price.toLocaleString()}`;
    } else {
      const currencyFormat =
        currency === "rub"
          ? "ru-RU"
          : currency === "eur"
          ? "de-DE"
          : currency === "usd"
          ? "us-US"
          : "ru-RU";
      const upperCurrency = currency.toUpperCase();
      return new Intl.NumberFormat(currencyFormat, {
        style: "currency",
        currency: upperCurrency,
        currencyDisplay: "narrowSymbol",
        maximumFractionDigits: 0,
      }).format(price);
    }
  };

  return (
    <Button
      sx={
        IE
          ? {
              ...styleButton,
              backgroundColor: styleGlobalOrangeIE11,
              ":hover": { backgroundColor: styleGlobalOrangeIE11 },
            }
          : styleButton
      }
    >
      Купить
      <br /> за {formatPriceByCurrency(price, currency)}
    </Button>
  );
};
