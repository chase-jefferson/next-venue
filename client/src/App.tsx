import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container pt-5">
        <Outlet />
      </main>
    </div>
  );
}

<<<<<<< HEAD
=======

>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
export default App;
