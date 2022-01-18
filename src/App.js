import React from 'react'
import { Routing } from './routes/Routing'
import {Navbar} from './components/navbar/Navbar'
import './shared/global/Global.css'
import {UserProvider} from './shared/global/UserProvider'

function App() {
  return (
    <UserProvider>
    <Routing>
      <Navbar/>
    </Routing>
    </UserProvider>
  );
}

export default App;
