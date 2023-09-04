import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import './AboutUs.css'

function GroupExample() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const resetHoveredIndex = () => {
    setHoveredIndex(null);
  };

  const cardsData = [
    {
      src : "https://img.freepik.com/premium-vector/cartoon-young-man-icon_24908-23721.jpg?w=740",
      title: "Agustin Sanchez",
    },
    {
      src: "https://img.freepik.com/free-vector/hand-drawn-people-with-dreadlocks-illustration_23-2149752841.jpg?w=740&t=st=1692746761~exp=1692747361~hmac=f9823cbbb6c170adfd707b86fb79497d6ef28c666f2a291f4274d9b4eee6aa61", 
      title: "Carlos Dip Fadel",
    },
    {
      src: "https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg?w=740", 
      title: "Angel Pastrana",
    },
    {
      src: "https://img.freepik.com/vector-premium/diseno-ilustracion-vector-personaje-avatar-hombre-joven_24877-18519.jpg?w=740", 
      title: "Lucas Ranalleta",
    },
    {
      src: "https://img.freepik.com/premium-vector/cartoon-young-man-icon_24908-23707.jpg?w=740", 
      title: "Mario Copa",
    },
  ];

  return (
    <div>
      <div
        className="description"
       
      >
        <p
          style={{
            
          }}
        >
          ¡Hola a todos! Somos un apasionado grupo de estudiantes de
          programación que estamos trabajando juntos en un emocionante proyecto
          de diseño web. Nuestra misión es crear una plataforma de control de
          stock intuitiva y eficiente. A medida que exploramos el fascinante
          mundo de la programación, estamos canalizando nuestra creatividad y
          habilidades técnicas para desarrollar una solución que permita a las
          empresas gestionar sus inventarios de manera más eficaz. Estamos
          entusiasmados por fusionar la tecnología con las necesidades del mundo
          real y estamos comprometidos en brindar una herramienta que
          simplifique el seguimiento y la gestión de inventarios. ¡Esperamos que
          nuestro trabajo pueda aportar un impacto positivo al mundo empresarial
          y estamos emocionados de compartir nuestro progreso con todos ustedes!
        </p>
      </div>

      <CardGroup>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={resetHoveredIndex}
            style={{
              transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease-in-out",
              backgroundColor:
                hoveredIndex === index ? "#" : "transparent", // Color de fondo de cards
              boxShadow:
                hoveredIndex === index
                  ? "0 4px 8px rgba(0, 0, 0, 0)"
                  : "none",
            }}
          >
            <Card.Img
              variant="top"
              src={card.src}
              className="rounded-circle mx-auto mt-3"
            />
            <Card.Body className="text-center">
              <Card.Title>{card.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default GroupExample;
