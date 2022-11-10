import "./header.css"

import React from 'react'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
    <Link className="logo" to="/" >Film List</Link>
    <Link className="favoritos" to="/favoritos" >Meus filmes</Link>
    </header>
  )
}
