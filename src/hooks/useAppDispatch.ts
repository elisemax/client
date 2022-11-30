import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { store } from "../store";

type AppDispatch = typeof store.dispatch
export const useTypeDispatch: () => AppDispatch = useDispatch