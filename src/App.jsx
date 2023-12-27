import { useState } from 'react'
import './css/App.css'
import './css/normalize.css'
import { Portada } from './components/Portada'
import { Card } from './components/Card'


function App() {
  const [data, setData] = useState()
  const infPortada = {
    titulo: "Luis Fdo. Castrillón",
    rol: "Analista y Desarrollador de Software",
    elemento:"</>",
    descripcion: "Soy un joven programador autodidacta apasionado por el mundo de la tecnologia donde a lo largo de todo este camino de aprendizaje he adquirido diferentes conocimientos y habilidades como tecnologias para el Front-End y Back-End"
  }
  return (
    <>
      <Portada {...infPortada}/>
      <Card/>
    </>
  )
}

export default App
