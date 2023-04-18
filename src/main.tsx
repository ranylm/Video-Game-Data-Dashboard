import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Provider as Toast } from "@radix-ui/react-toast";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <Toast>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Toast>
    </DndProvider>
  </Provider>
);
