import React from 'react'
import { Routing } from './routes/Routing'
import './shared/global/Global.css'
import {UserProvider} from './shared/global/UserProvider'

function App() {
  return (
    <UserProvider>
    <Routing>
    </Routing>
    </UserProvider>
  );
}

export default App;
