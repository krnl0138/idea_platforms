import { createContext } from "react";
import { INITIAL_STATE_TICKET } from "../../utils/constants";

const initial = { ...INITIAL_STATE_TICKET, index: -Infinity };
export const TicketCardContext = createContext(initial);
