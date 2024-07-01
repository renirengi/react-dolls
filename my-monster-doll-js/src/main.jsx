import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {
  BrowserRouter
} from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import { AuthProvider } from './context/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
     </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
