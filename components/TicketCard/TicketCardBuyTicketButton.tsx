import { Button } from "@mui/material";
import { styleGlobalOrange, styleGlobalWhite } from "../../styles/variables";
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

  const formatPriceByCurrency = (price: number, currency: string): string => {
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
  };

  return (
    <Button sx={styleButton}>
      Купить
      <br /> за {formatPriceByCurrency(price, currency)}
    </Button>
  );
};
