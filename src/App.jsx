import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import './App.css'
import Home from "./pages/Home"
import NFTGrid from "./pages/NFTGrid"

function App() {
  const renderHome = () => {
    return <Home />
  }

  const renderNFTGrid = () => {
    return <NFTGrid />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nft/:nftid" element={renderNFTGrid()} />
        <Route path="/" element={renderHome()} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
