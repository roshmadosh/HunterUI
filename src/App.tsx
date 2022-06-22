import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import { useToastContext } from "./contexts/useToastContext";



const App = () => {
  const { ToastProvider, Toast } = useToastContext();
  return  ( 
  <div id="app-container">
    <Navbar />
    <ToastProvider>
      <main id="main-container">
        <Outlet />
      </main>
    </ToastProvider>
    <Toast />
  </div>
  )
};

export default App;