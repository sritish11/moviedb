import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

import moviedbRoute from './moviedbRoute.jsx'


createRoot(document.getElementById('root')).render(
  moviedbRoute,
)
