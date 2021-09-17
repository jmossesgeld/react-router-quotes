import { configureStore } from "@reduxjs/toolkit";
import quotes from "./quotes";

export default configureStore({ reducer: { quotes } });
