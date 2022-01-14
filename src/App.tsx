import "animate.css";
import "antd/dist/antd.variable.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ThemeProvider } from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Alert from "./components/Alert";
import { WalletProvider } from "./contexts/useWallet";
import { AppRoutes } from "./routes/Routes";
import { GlobalStyle } from "./styles/global";
import "./styles/global.css";
import { theme } from "./styles/theme";

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
        <WalletProvider>
          <AppRoutes />
        </WalletProvider>
      </ThemeProvider>
      <Alert></Alert>
    </>
  );
}

export default App;
