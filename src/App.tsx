import React from 'react';
import AppRouter from './AppRouter';
import Header from './components/common/Header';

const App = () => {
  return (
    <div>
      <AppRouter>
        <Header />
      </AppRouter>
    </div>
  );
};

export default App;
