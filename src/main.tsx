import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Provider as Toast } from "@radix-ui/react-toast";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <DndProvider
      backend={window.innerWidth >= 500 ? HTML5Backend : TouchBackend}
    >
      <Toast>
        <BrowserRouter
        // basename="/MOD2-React-App/"
        >
          <App />
        </BrowserRouter>
      </Toast>
    </DndProvider>
  </Provider>
);
