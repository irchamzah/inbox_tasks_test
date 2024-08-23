import "./index.css";
import "./App.css";
import QuicksButton from "./components/quick_button/QuicksButton";
import { QuickProvider } from "./contexts/QuickContext";

function App() {
  return (
    <>
      <div className="relative h-screen bg-gray-900 font-lato">
        <QuickProvider>
          <QuicksButton />
        </QuickProvider>
      </div>
    </>
  );
}

export default App;
