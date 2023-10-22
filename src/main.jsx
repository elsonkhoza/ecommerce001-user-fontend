import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <ConfigProvider theme={{
      token:{
        fontFamily: "Space Grotesk, sans-serif",
      }
    }}>
    <App />

    </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
