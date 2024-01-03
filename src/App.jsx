import { useState } from 'react'
import './css/App.css'
import './css/normalize.css'
import { Portada } from './components/Portada'
import { Card } from './components/Card'
import { Skills } from './components/Skills'
import { AboutMe } from './components/aboutme'
import { Certificaciones } from './components/certificaciones'
import { Footer } from './components/Footer'

function App() {
  const [data, setData] = useState()
  const infPortada = {
    titulo: "Luis Fdo. Castrillón",
    rol: "Analista y Desarrollador de Software",
    descripcion: "Soy un joven programador autodidacta apasionado por el mundo de la tecnologia donde a lo largo de todo este camino de aprendizaje he adquirido diferentes conocimientos y habilidades como tecnologias para el Front-End y Back-End"
  }
  return (
    <>
      <Portada {...infPortada}/>
      <Card/>
      <Skills/>
      <AboutMe/>
      <Certificaciones/>
      <Footer/>
    </>
  )
}

export default App
