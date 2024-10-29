import React, { useState } from 'react';
import './App.css';

function Encabezado() {
  return (
    <header className="encabezado">
      <h1>Bienvenidos a la Página de The Boys</h1>
      <p>Explora el mundo de los Supes y Anti-Héroes</p>
    </header>
  );
}

function ContenidoPrincipal() {
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  const personajes = [
    {
      nombre: "Homelander",
      descripcion: "El más poderoso de los supes, líder de Los Siete.",
      imagen: "https://deadline.com/wp-content/uploads/2023/11/The-Boys-Homelander-e1720743363244.jpg",
    },
    {
      nombre: "Billy Butcher",
      descripcion: "Líder de The Boys, lucha por acabar con los Supes.",
      imagen: "https://imgix.ranker.com/list_img_v2/6052/2806052/original/best-billy-butcher-quotes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720",
    },
    {
      nombre: "Hughie Campbell",
      descripcion: "Nuevo miembro de The Boys, busca venganza.",
      imagen: "https://sm.ign.com/ign_es/feature/i/its-time-f/its-time-for-the-boys-to-stop-torturing-hughie-campbell_4zad.jpg",
    },
  ];

  return (
    <main className="contenido-principal">
      <h2>Personajes Principales</h2>
      <div className="personaje-grid">
        {personajes.map((personaje, index) => (
          <div
            key={index}
            className={`personaje-card ${hoveredCharacter === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCharacter(index)}
            onMouseLeave={() => setHoveredCharacter(null)}
          >
            <img src={personaje.imagen} alt={personaje.nombre} />
            <h3>{personaje.nombre}</h3>
            <p>{personaje.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

function PieDePagina() {
  return (
    <footer className="pie-de-pagina">
      <p>&copy; 2024 Página de Fans de The Boys. </p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Encabezado />
      <ContenidoPrincipal />
      <PieDePagina />
    </div>
  );
}

export default App;
