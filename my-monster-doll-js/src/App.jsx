import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './scss/app.scss'
import Header from './components/Header'
import Catalog from './pages/Catalog'
import Register from './components/Register.jsx'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import DollPage from './pages/DollPage'
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth.jsx'
import Login from './components/Login.jsx'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {


  return (
  
        <Routes>
          <Route path="/" element={<Layout/>}>
            {/* public routes */}
            <Route path="/catalog" element={<Catalog/>}></Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/linkpage" element={<div>linkpage</div>} />
            <Route path="/unauthorized" element={<div>Unautorized</div>} />
            <Route path="/doll/:id" element={<DollPage/>}></Route>

            {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="/" element={<div>Home</div>} />
              <Route path="/cart" element={<Cart/>}></Route>
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<div>Editor</div>} />
            </Route>


            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="admin" element={<div>Admin</div>} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
              <Route path="lounge" element={<div>Lounge</div>} />
            </Route>        */}
          
            <Route path="*" element={<NotFound/>}></Route>
          </Route>
        </Routes>
       
     

  )
}

export default App
