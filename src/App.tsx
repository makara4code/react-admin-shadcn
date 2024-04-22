import AppProvider from "./providers";
import Router from "@/routes";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
