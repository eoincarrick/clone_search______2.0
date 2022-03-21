import { Navbar, Footer, Route } from './components/index';
import React, { useState } from 'react';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen'>
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Route />
        <Footer />
      </div>
    </div>
  );
};

export default App;
