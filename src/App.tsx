import * as React from "react";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/Routes";
import "react-toastify/dist/ReactToastify.min.css";
import Alert from "./components/Alert";
function App() {
  return (
    <>
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
      <AppRoutes />
      <Alert></Alert>
    </>
  );
}

export default App;
