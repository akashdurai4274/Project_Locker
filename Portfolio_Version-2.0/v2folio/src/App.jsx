import MainPage from "./components/MainPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleCopy = (e) => {
      e.preventDefault();
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);
  return (
    <div className="container h-full bg-gradient-to-r from-pink-100 from-1% to-blue-100">
      <MainPage />
    </div>
  );
}

export default App;
