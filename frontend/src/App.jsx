import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Landing from './components/Landing'
import {Toaster} from 'react-hot-toast';
import Dashboard from './pages/Dashboard'
import AddNote from './components/AddNote'
import EditNotes from './components/EditNotes'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <Toaster position='top-right'/>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Landing />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute> }/>
        <Route path="/addNote" element={ <ProtectedRoute><AddNote /> </ProtectedRoute>} />    
        <Route path="/editNotes/:id" element={ <ProtectedRoute><EditNotes /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App
