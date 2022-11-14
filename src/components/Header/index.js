import "./header.css"

import React from 'react'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
    <Link className="logo" to="/" >Filmes Cartaz</Link>
    <Link className="favoritos" to="/favoritos" >Favoritos</Link>
    </header>
  )
}
