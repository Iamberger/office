import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { routes } from "./router/routes";
import { ToastContainer } from "react-toastify";
import { theme } from "./styles/mui_theme";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <Box
          sx={{
            direction: "rtl",
            minWidth: "100vw",
            minHeight: "100vh",
          }}
        >
          {routes}
        </Box>
      </DndProvider>
    </ThemeProvider>
  </Provider>
);
