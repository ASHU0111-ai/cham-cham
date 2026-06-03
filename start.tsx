import { StartClient, createBrowserHistory } from "@tanstack/react-start";
import { createRouter } from "./router";

const router = createRouter({ history: createBrowserHistory() });

StartClient({ router });
