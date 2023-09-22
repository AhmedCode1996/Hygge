import { useContext } from "react";
import { Context } from "../context";

export const useContextProvider = () => useContext(Context);
