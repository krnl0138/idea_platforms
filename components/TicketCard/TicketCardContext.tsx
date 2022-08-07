import { createContext, useContext } from "react";
import { TTicket } from "../../utils/types";

export const TicketCardContext = createContext<
  (TTicket & { currency: string }) | undefined
>(undefined);

export const useTicketCard = () => {
  const context = useContext(TicketCardContext);
  if (context === undefined) {
    throw new Error("useTicketCard must be used within a CountProvider");
  }
  return context;
};
