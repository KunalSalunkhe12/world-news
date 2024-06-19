import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl px-6">
        <Outlet />
      </main>
    </>
  );
}

export default App;
