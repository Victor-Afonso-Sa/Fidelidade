import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import Alert from "./components/Alert";
import { AppRoutes } from "./routes/Routes";

import { theme } from "./styles/theme";
import "react-toastify/dist/ReactToastify.min.css";
import { GlobalStyle } from "./styles/global";
import "./styles/global.css";
import "animate.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.variable.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
      <Alert></Alert>
    </>
  );
}

export default App;
