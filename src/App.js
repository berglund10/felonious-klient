import React from 'react'
import { Routing } from './routes/Routing'
import {Navbar} from './components/navbar/Navbar'
import { TemplateView } from './components/template/TemplateView'
import './shared/global/Global.css'
import {UserProvider} from './shared/global/UserProvider'

function App() {
  return (
    <UserProvider>
    <Routing>
      <TemplateView/>
    </Routing>
    </UserProvider>
  );
}

export default App;
