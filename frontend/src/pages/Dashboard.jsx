import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ListNotes from '../components/ListNotes'

function Dashboard() {
  return (
    <div>
        <Navbar/>
        <ListNotes/>
        <Footer/>
            </div>
  )
}

export default Dashboard