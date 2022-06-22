import Navbar from "./navbar";
import { LoginPage } from "./pages";
import { useToastContext } from "./contexts/useToastContext";



const App = () => {
  const { ToastProvider, Toast } = useToastContext();
  return  ( 
  <div id="app-container">
    <Navbar />
    <ToastProvider>
      <main id="main-container">
        <LoginPage />
      </main>
    </ToastProvider>
    <Toast />
  </div>
  )
};

export default App;