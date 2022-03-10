import "./App.css";
import { Navbar, Footer, Route } from "./components/index";
import React, { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dar:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Route />
        <Footer />
      </div>
    </div>
  );
}

export default App;
