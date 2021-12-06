import * as React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { AppRoutes } from "./Routes";
import 'react-toastify/dist/ReactToastify.min.css';
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
    </>
  );
}

export default App;
