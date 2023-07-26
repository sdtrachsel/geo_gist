// import logo from './logo.svg';

import { useState, useEffect } from 'react';
import { Header } from './Header';
import { ArticleListing } from './ArticleListing';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('All')
  return (
    <div className="App">
      <Header />
      <ArticleListing />
    </div>
  );
}

export default App;
