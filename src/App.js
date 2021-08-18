import { useState } from 'react';
import { AppRouter } from './Components/AppRouter/AppRouter';
import { GlobalContext } from './Components/GlobalContext/GlobalContext';

function App() {

  const [data, setData] = useState({
    type: "",
    data: []
  })

  return (
    <>
      <GlobalContext.Provider value={{
        data,
        setData
      }}>
        <AppRouter/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
